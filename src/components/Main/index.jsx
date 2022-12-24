import { useState, useLayoutEffect } from 'react'
import './style.scss'
import { Card } from '../Card'

export function Main() {
    const [championsList, setChampionsList] = useState({name: '', title: ''});
    const[finallyState, setFinallyState] = useState(true);
    const championsKeys = Object.keys(championsList)
  
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
  
    if(finallyState) return ('loading...');
    
    return(
        <main>
            {
                championsKeys.map(el => <Card name={championsList[el].name} title={championsList[el].title} img={championsList[el].image.full} key={championsKeys.indexOf(el)}/>)
            }
        </main>
    )
}