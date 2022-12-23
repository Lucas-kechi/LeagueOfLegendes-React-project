import './style.scss'
import { Card } from '../Card'

export function Main(props) {
    const championsKeys = Object.keys(props.champions)
    
    return(
        <main>
            {
                championsKeys.map(el => <Card name={props.champions[el].name} title={props.champions[el].title} img={props.champions[el].image.full} key={championsKeys.indexOf(el)}/>)
            }
        </main>
    )
}