import { useState, useLayoutEffect } from 'react'
import './style.scss'
import { Card } from '../Card'
import { useNavigate } from 'react-router-dom';

export function Main(props) {
    const [championsList, setChampionsList] = useState({name: '', title: ''});
    const [finallyState, setFinallyState] = useState(true);
    const navigate = useNavigate();
    let championsKeys = Object.keys(championsList);
    
    const cardClickLogic = (championName) => {
        navigate(`/champion/${championName}`)
    }
  
    useLayoutEffect(() => {
        async function getApiAsync() {
            const response = await fetch("http://ddragon.leagueoflegends.com/cdn/12.23.1/data/pt_BR/champion.json");
            const data = await response.json();
  
            setChampionsList(Object.assign({}, data.data))
        }
  
        getApiAsync()
          .catch(error => console.error('Erro ao carregar a API', error))
          .finally(() => setFinallyState(false));
    }, [])
    
    if(props.tagOnFilter) {
        const championsFilterArray = Object.entries(championsList).filter(([key, value]) => value.tags.includes(props.tagOnFilter));
        
        championsKeys = Object.keys(Object.fromEntries(championsFilterArray));
        console.log(props.tagOnFilter)
    }
    if(props.tagOnFilter == 'off') championsKeys = Object.keys(championsList);
    if(finallyState) return ('loading...');

    return(
        <main>
            {
                championsKeys.map(el =>
                    <Card 
                        name={championsList[el].name} 
                        title={championsList[el].title} 
                        img={championsList[el].image.full} 
                        key={el}
                        onclickLogic={cardClickLogic}
                    />
                )
            }
        </main>
    )
}