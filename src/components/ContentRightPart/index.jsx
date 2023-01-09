import { ChampionInfos } from '../ChampionInfos'
import { Loading } from '../Loading'
import './style.scss'

export function ContentRightPart(props) {

    if(props.request) {
        return <Loading />
    }
    
    return(
        <div className='rightPart'>
            <header className='rightPart__header'>
                <h1 className='rightPart__h1'>
                    {props.name}
                </h1>
                <h2>
                    {props.titleMoment}
                </h2>
            </header>
            <div className="rightPart__tags">
                {
                    props.tags.map(tag => <span key={tag}> {tag} </span>)
                }
            </div>
            <div className="rightPart__info">
                {
                    props.info.map(([key, value]) => (
                        <ChampionInfos
                            infoName={key}
                            infoValue={value}
                            key={key}
                        />

                    ))
                }
            </div>
            <div className="rightPart__lore">
                {props.lore}
            </div>
        </div>
    )
}
