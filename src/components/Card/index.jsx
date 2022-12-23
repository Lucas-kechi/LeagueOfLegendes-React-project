import './style.scss'

export function Card(props) {
    
    return(
    <div style={{backgroundImage: `url(http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${props.name}_0.jpg)`}} className="card">
            {/* <img src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${props.name}_0.jpg`} alt="Imagem do Campeão" /> */}
            <div className='card__text'>
                <h2>
                    {props.name}
                </h2>
                <p>
                    {props.title}
                </p>
            </div>
        </div>
    )
}