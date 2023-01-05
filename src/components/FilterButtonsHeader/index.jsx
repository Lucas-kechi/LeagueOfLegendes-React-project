import './style.scss'

export function FilterButtons(props) {
    return(
        <button 
            className={`filterButtons__button${props.tag}`}
            id={`button${props.tag}`}
            onClick={() => props.onclick(event)}
        >
        <img src={`https://static.wikia.nocookie.net/leagueoflegends/images/${props.url}/${props.imgTag}_icon.png`} alt={props.tag} />
        </button>
    )
}
