import "./style.scss"
import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'
import { Header } from "../../components/Header";

export function ChampionInfo() {
    const urlParameter = useParams();
    const [championInfo, setChampionInfo] = useState({});
    const [apiRequestDontFinish, setApiRequestDontFinish] = useState(true);

    useEffect(() => {
        const fetchAssync = async () => {
            const response = await fetch(`http://ddragon.leagueoflegends.com/cdn/12.23.1/data/en_US/champion/${urlParameter.id}.json`);
            const data = await response.json();

            setChampionInfo({name: data.data[urlParameter.id].name})
        }

        fetchAssync()
            .catch(error => console.error("Erro ao carregar a Api", error))
            .finally(() => setApiRequestDontFinish(false))
    }, [])

    if(apiRequestDontFinish) return "Loading..."
    
    return(
        <div className="container" style={{color: 'black'}}>
            <Header header='ok' />
        </div>
    )
}