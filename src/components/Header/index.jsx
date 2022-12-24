import './style.scss'
import { useState } from 'react';

export function Header() {
    const filterButtonsLogic = (btnId) => {
        const allButtons = document.querySelectorAll('.header__filterButtons button');

        if(!btnId.classList.contains('onclick')) {
            allButtons.forEach(el => el.classList.remove('onclick'))
            btnId.classList.add('onclick');
        }
        else if(btnId.classList.contains('onclick')) btnId.classList.remove('onclick');
    }

    return(
        <header className="header">
            <div className="header__filterButtons">
                <button 
                    className="header__buttonFighter"
                    id='buttonFighter'
                    onClick={() => filterButtonsLogic(buttonFighter)}
                >
                    <img src="https://static.wikia.nocookie.net/leagueoflegends/images/8/8f/Fighter_icon.png" alt="Fighter image" />
                </button>
                <button 
                    className="header__buttonTank"
                    id='buttonTank'
                    onClick={() => filterButtonsLogic(buttonTank)}
                >
                    <img src="https://static.wikia.nocookie.net/leagueoflegends/images/5/5a/Tank_icon.png" alt="Tank image" />
                </button>
                <button 
                    className="header__buttonAssassins"
                    id='buttonAssassins'
                    onClick={() => filterButtonsLogic(buttonAssassins)}
                >
                    <img src="https://static.wikia.nocookie.net/leagueoflegends/images/2/28/Slayer_icon.png" alt="Assassins image" />
                </button>
                <button 
                    className="header__buttonMage"
                    id='buttonMage'
                    onClick={() => filterButtonsLogic(buttonMage)}
                >
                    <img src="https://static.wikia.nocookie.net/leagueoflegends/images/2/28/Mage_icon.png" alt="Mage image" />
                </button>
                <button 
                    className="header__buttonSupport"
                    id='buttonSupport'
                    onClick={() => filterButtonsLogic(buttonSupport)}
                >
                    <img src="https://static.wikia.nocookie.net/leagueoflegends/images/5/58/Controller_icon.png" alt="Support image" />
                </button>
                <button 
                    className="header__buttonMarksman"
                    id='buttonMarksman'
                    onClick={() => filterButtonsLogic(buttonMarksman)}
                >
                    <img src="https://static.wikia.nocookie.net/leagueoflegends/images/7/7f/Marksman_icon.png" alt="Marksman image" />
                </button>
            </div>
            <div className='header__searchField'>
                <input type="text" className='header__inputChampion' placeholder='Nome do Campeão'/>
                <button type='button' className='header__buttonSearch'>Pesquisar</button>
            </div>
        </header>
    )
}