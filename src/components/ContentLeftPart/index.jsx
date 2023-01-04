import './style.scss'
import { IconLeftArrow, IconRightArrow } from '../../assets/svgsAsComponents.jsx'

export function ContentLeftPart(props) {
    return(
        <section className='leftPart'>
            <div className='leftPart__divContent'>
                <div className="leftPart__contentTop">
                    <button 
                        className='left-arrow leftPart__contentTop__buttonLeft'
                        onClick={() => props.onclick(event)}
                    >
                        <IconLeftArrow height='3rem' width='3rem'/>
                    </button>
                    <img src={props.img} alt="Champion Image" className='leftPart__image'/>
                    <button 
                        className='leftPart__contentTop__buttonRight'
                        onClick={() => props.onclick(event)}
                    >
                        <IconRightArrow height='3rem' width='3rem'/>
                    </button>
                </div>
                
            </div>
        </section>
    )
}