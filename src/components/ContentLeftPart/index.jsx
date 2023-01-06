import './style.scss'
import { IconLeftArrow, IconRightArrow, IconBackArrow, IconDashCircle, IconPlusCircle } from '../../assets/svgsAsComponents.jsx'
import { ChampionStats } from '../ChampionStats'

export function ContentLeftPart(props) {
    return(
        <section className='leftPart'>
            <button 
                className='back-button'
                onClick={props.backButton}
            >
                <IconBackArrow width='3rem' height='3rem'/>
            </button>
            <div className='leftPart__divContent'>
                <div className="leftPart__contentTop">
                    <button 
                        className='left-arrow leftPart__contentTop__buttonLeft'
                        onClick={() => props.buttonsImageLogic(event)}
                    >
                        <IconLeftArrow height='3rem' width='3rem'/>
                    </button>
                    <img src={props.img} alt="Champion Image" className='leftPart__image'/>
                    <button 
                        className='leftPart__contentTop__buttonRight'
                        onClick={() => props.buttonsImageLogic(event)}
                    >
                        <IconRightArrow height='3rem' width='3rem'/>
                    </button>
                </div>
                <div className="leftPart__contentBottom">
                    <div className="leftPart__contentBottom__lvlPainel">
                        <button 
                            className='leftPart__lvlPainel__buttonDash'
                            onClick={() => props.buttonsPainelLogic(event)}
                        >
                            <IconDashCircle height='1rem' width='1rem'/>
                        </button>
                        <input 
                            type="text"
                            id="ChampionLvl"
                            name='ChampionLvl'
                            className='leftPart__lvlPainel__input'
                            value={props.levelRef + 1}
                            readOnly
                        />
                        <button 
                            className='leftPart__lvlPainel__buttonPlus'
                            onClick={() => props.buttonsPainelLogic(event)}
                        >
                            <IconPlusCircle height='1rem' width='1rem'/>
                        </button>
                    </div>
                    <div className="leftPart__contentBottom__Info">
                        {
                            props.statsPerLevel.map(([key, value]) => (
                                <ChampionStats 
                                    stat={key}
                                    value={value}
                                    key={key}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}
