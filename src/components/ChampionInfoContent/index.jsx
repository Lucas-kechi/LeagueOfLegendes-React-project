import './style.scss'
import { useEffect, useState } from "react"
import { useNavigate, useParams } from 'react-router-dom'
import { ContentLeftPart } from '../ContentLeftPart';
import { ContentRightPart } from '../ContentRightPart';

export function ChampionInfoContent() {
    const urlParameter = useParams();
    const [ championInfo, setChampionInfo ] = useState();
    const [ apiRequestDontFinish, setApiRequestDontFinish ] = useState(true);
    const [ skinIndex, setSkinIndex ] = useState(0);
    const [ imagesAsync, setImagesAsync] = useState({splash: '', loading: ''});
    const navigate = useNavigate();

    const handleSkinsOnleftPartButtons = (event) => {
        if(event.target.classList[0] === 'left-arrow') {
            skinIndex === 0 ? setSkinIndex(championInfo.skins.length - 1) : setSkinIndex(skinIndex - 1);
        } else{
            skinIndex === championInfo.skins.length - 1 ? setSkinIndex(0) : setSkinIndex(skinIndex + 1)
        }

    }

    const handleSkinsName = () => {
        if(skinIndex === 0) return championInfo.name
        else return imagesAsync.championName === 'default' ? 'Loading...' : imagesAsync.championName
    }

    const backButtonLogic = () => {
        navigate('/');
    }

    useEffect(() => {
        const fetchAssync = async () => {
            const response = await fetch(`http://ddragon.leagueoflegends.com/cdn/12.23.1/data/pt_BR/champion/${urlParameter.id}.json`);
            const data = await response.json();

            setChampionInfo({
                name: data.data[urlParameter.id].name,
                title: data.data[urlParameter.id].title,
                image: data.data[urlParameter.id].image.full.split('.')[0],
                skins: data.data[urlParameter.id].skins,
            })
        }

        fetchAssync()
            .catch(error => console.error("Erro ao carregar a Api", error))
            .finally(() => setApiRequestDontFinish(false));
    }, [])

    useEffect(() => {
        if(championInfo) {
            const splashAndLoadingImageAssync = async () => {
                const SplashResponse = await fetch(`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${championInfo.image}_${championInfo.skins[skinIndex].num}.jpg`);
                const LoadingResponse = await fetch(`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${championInfo.image}_${championInfo.skins[skinIndex].num}.jpg`);

                setImagesAsync({
                    splash: SplashResponse.url,
                    loading: LoadingResponse.url,
                    championName: championInfo.skins[skinIndex].name,
                })
            }
    
            splashAndLoadingImageAssync()
                .catch(error => console.error("Erro ao carregar a Api", error));
        }
    }, [championInfo, skinIndex])

    if(apiRequestDontFinish) return "Loading..."
    
    return(
        <div className="content" style={{backgroundImage: `url(${imagesAsync.splash})`}}>
            <ContentLeftPart 
                img={imagesAsync.loading}
                buttonsImageLogic={handleSkinsOnleftPartButtons}
                backButton={backButtonLogic}
            />
            <ContentRightPart name={handleSkinsName()}/>
        </div>
    )
}