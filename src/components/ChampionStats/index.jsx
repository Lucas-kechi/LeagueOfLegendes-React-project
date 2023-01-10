import './style.scss'

export const ChampionStats = (props) => {
  const statsWithoutFixed = ['HP', 'MP', 'Move Speed', 'ATK Range'];

  if(statsWithoutFixed.includes(props.stat)) {
    // TODO: mudar a props da linha 12 pra um ternario e remover o return de baixo.
    return(
      <div className='stats'>
          {props.stat}:&nbsp;
        <span className='stats__value'>
          {props.value}
        </span>
      </div>
    )
  }

  return(
    <div className='stats'>
      {props.stat}:&nbsp;
      <span className='stats__value'>
        {props.value.toFixed(2)}
      </span>
    </div>
  )
}
