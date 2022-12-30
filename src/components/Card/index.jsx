import './style.scss'

export function Card(props) {
    const imageName = props.img.split('.');

    if(props.name === 'Ziggs') {
        return (
            <div 
                style={{backgroundImage: `url(http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${imageName[0]}_0.jpg)`}} 
                className="card" 
                onClick={() => props.onclickLogic(props.id)}
            >
                <div className='card__text'>
                    <h2>
                        {props.name}
                    </h2>
                    <p style={{fontSize: '1.5vh'}}>
                        {props.title}
                    </p>
                </div>
            </div>
        )
    }

    return(
        <div 
            style={{backgroundImage: `url(http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${imageName[0]}_0.jpg)`}} 
            className="card"
            onClick={() => props.onclickLogic(props.id)}
        >
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