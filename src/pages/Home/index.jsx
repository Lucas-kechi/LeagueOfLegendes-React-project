import { useState, useLayoutEffect } from 'react'
import "./style.scss"
import { Header } from '../../components/Header'
import { Main } from "../../components/Main"
import { Footer } from "../../components/Footer"

export function Home() {
  const [championsList, setChampionsList] = useState({name: '', title: ''});
  const[finallyState, setFinallyState] = useState(true);

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

  return (
    <div className="container">
      <Header />
    
      <Main champions={championsList}/>
      
      <Footer />
    </div>
  )
}
       