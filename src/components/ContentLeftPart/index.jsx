import './style.scss'
import { IconLeftArrow, IconRightArrow, IconBackArrow} from '../../assets/svgsAsComponents.jsx'
import { ChampionStats } from '../ChampionStats'
import { PainelLevel } from '../PainelLevel'

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
                    <PainelLevel
                        buttonsPainelLogic={props.buttonsPainelLogic}
                        levelRef={props.levelRef}
                    />
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
