import './style.scss'
import topIco from "../../assets/Position_Challenger-Top.png"
import jungleIco from "../../assets/Position_Challenger-Jungle.png"
import midIco from "../../assets/Position_Challenger-Mid.png"
import supIco from "../../assets/Position_Challenger-Support.png"
import botIco from "../../assets/Position_Challenger-Bot.png"

export function Header() {
    return(
        <header className="header">
            <div className="header__filterButtons">
                <button className="header__buttonTop">
                    <img src={topIco} alt="Top image" />
                </button>
                <button className="header__buttonJungle">
                    <img src={jungleIco} alt="Jungle image" />
                </button>
                <button className="header__buttonMid">
                    <img src={midIco} alt="Mid image" />
                </button>
                <button className="header__buttonSup">
                    <img src={supIco} alt="Sup image" />
                </button>
                <button className="header__buttonBot">
                    <img src={botIco} alt="Bot image" />
                </button>
            </div>
            <div className='header__searchField'>
                <input type="text" className='header__inputChampion' placeholder='Nome do Campeão'/>
                <button type='button' className='header__buttonSearch'>Pesquisar</button>
            </div>
        </header>
    )
}