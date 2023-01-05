import { Loading } from '../Loading'
import './style.scss'

export function ContentRightPart(props) {

    if(props.request) {
        return <Loading />
    }

    return(
        <div className='rightPart'>
            <h1>{props.name}</h1>
        </div>
    )
}
