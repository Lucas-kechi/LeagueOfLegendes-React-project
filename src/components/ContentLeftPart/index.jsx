import './style.scss'
import leftArrow from '../../assets/left-arrow.svg'

export function ContentLeftPart(props) {
    return(
        <section className='leftPart'>
            <div className='leftPart__divContent'>
                <div className="leftPart__contentTop">
                    <button>
                        {/* <img src={leftArrow} alt="left arrow" style={{backgroundColor: 'rgba(0, 0, 255)', color: 'white'}}/> */}
                        {leftArrow}
                    </button>
                    <img src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${props.img}_0.jpg`} alt="Champion Image" className='leftPart__image'/>
                    <button></button>
                </div>
            </div>
        </section>
    )
}