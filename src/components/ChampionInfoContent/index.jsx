import './style.scss'
import { useEffect, useState } from "react"
import { useNavigate, useParams } from 'react-router-dom'
import { ContentLeftPart } from '../ContentLeftPart';
import { ContentRightPart } from '../ContentRightPart';
import { Loading } from '../Loading';

export function ChampionInfoContent() {
    const urlParameter = useParams();
    const [ championInfo, setChampionInfo ] = useState();
    const [ apiRequestDontFinish, setApiRequestDontFinish ] = useState(true);
    const [ skinIndex, setSkinIndex ] = useState(0);
    const [ infoChampAsync, setInfoChampAsync] = useState({splash: '', loading: ''});
    const [ loadingApi, setLoadingApi ] = useState(true);
    const [ numberPerLevel, setNumberPerLevel ] = useState(0);
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
        else return infoChampAsync.championName === 'default' ? 'Loading...' : infoChampAsync.championName
    }

    const backButtonLogic = () => {
        navigate('/');
    }

    const buttonsFromPainelLevelLogic = (event) => {
        const buttonTarget = event.path.filter(el => el.className === 'leftPart__lvlPainel__buttonDash' || el.className === 'leftPart__lvlPainel__buttonPlus');
        
        if(buttonTarget[0].className == 'leftPart__lvlPainel__buttonPlus') ChampionLvl.value >= 18 ? ChampionLvl.value = 18 : setNumberPerLevel(prevState => ++prevState)
        else ChampionLvl.value <= 1 ? ChampionLvl.value = 1 : setNumberPerLevel(prevState => --prevState)
    }

    const tagsTranslatePtBr = (arrayTags) => {
        const tagsTranslated = arrayTags.map(el => {
            if(el === 'Marksman') return 'Atirador';
            if(el === 'Mage') return 'Mago';
            if(el === 'Tank') return 'Tanque';
            if(el === 'Figther') return 'Lutador';
            if(el === 'Assassin') return 'Assassino';
            if(el === 'Support') return 'Suporte';
        });

        return tagsTranslated;
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
                stats: Object.entries(data.data[urlParameter.id].stats),
                tags: tagsTranslatePtBr(data.data[urlParameter.id].tags),
                info: Object.entries(data.data[urlParameter.id].info),
                lore: data.data[urlParameter.id].lore,
            })
        }

        fetchAssync()
            .catch(error => console.error("Erro ao carregar a Api", error))
    }, [])

    useEffect(() => {
        if(championInfo) {
            const champInfo = async () => {
                setLoadingApi(true);

                const SplashResponse = await fetch(`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${championInfo.image}_${championInfo.skins[skinIndex].num}.jpg`);
                const LoadingResponse = await fetch(`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${championInfo.image}_${championInfo.skins[skinIndex].num}.jpg`);
                
                const championStatsPerLevel = Object.fromEntries(championInfo.stats.filter(([key, value]) => key.includes('perlevel')));
                const championStats = Object.fromEntries(championInfo.stats.filter(([key, value]) => !key.includes('perlevel')));
                
                setInfoChampAsync({
                    splash: SplashResponse.url,
                    loading: LoadingResponse.url,
                    championName: championInfo.skins[skinIndex].name,
                    stats: [
                        ['HP', (championStats.hp + numberPerLevel * championStatsPerLevel.hpperlevel)],
                        ['Move Speed', championStats.movespeed],
                        ['MP', (championStats.mp + numberPerLevel * championStatsPerLevel.mpperlevel)],
                        ['ATK Speed', (championStats.attackspeed + numberPerLevel * championStatsPerLevel.attackspeedperlevel)],
                        ['ATK', (championStats.attackdamage + numberPerLevel * championStatsPerLevel.attackdamageperlevel)],
                        ['ATK Range', championStats.attackrange],
                        ['AMR', (championStats.armor + numberPerLevel * championStatsPerLevel.armorperlevel)],
                        ['HP Regen', (championStats.hpregen + numberPerLevel * championStatsPerLevel.hpregenperlevel)],
                        ['MR', (championStats.spellblock + numberPerLevel * championStatsPerLevel.spellblockperlevel)],
                        ['MP Regen', (championStats.mpregen + numberPerLevel * championStatsPerLevel.mpregenperlevel)],
                    ],
                })
            }
            
            champInfo()
                .catch(error => console.error("Erro ao carregar a Api", error))
                .finally(() => {
                    setLoadingApi(false);
                    setApiRequestDontFinish(false)
                });
        }
    }, [championInfo, skinIndex, numberPerLevel])
    
    if(apiRequestDontFinish) return <Loading />
    
    return(
        <div className="content" style={{backgroundImage: `url(${infoChampAsync.splash})`}}>
            <ContentLeftPart 
                img={infoChampAsync.loading}
                buttonsImageLogic={handleSkinsOnleftPartButtons}
                backButton={backButtonLogic}
                buttonsPainelLogic={buttonsFromPainelLevelLogic}
                levelRef={numberPerLevel}
                statsPerLevel={infoChampAsync.stats}
            />
            <ContentRightPart 
                name={handleSkinsName()}
                request={loadingApi}
                titleMoment={championInfo.title}
                tags={championInfo.tags}
                info={championInfo.info}
                lore={championInfo.lore}
            />
        </div>
    )
}
