import { useEffect } from "react";
import { useContext } from "react";
import { FilterContext } from "../../contexts/FilterContext";
import { FilterButtons } from "../FilterButtonsHeader";
import "./style.scss";

export function Header() {
  const { setActiveFilter } = useContext(FilterContext);
  const allButtons = document.querySelectorAll(".header__filterButtons button");

  const buttonContentProps = [
    { Fighter: "8/8f", imgTag: "Fighter" },
    { Tank: "5/5a", imgTag: "Tank" },
    { Assassin: "2/28", imgTag: "Slayer" },
    { Mage: "2/28", imgTag: "Mage" },
    { Support: "5/58", imgTag: "Controller" },
    { Marksman: "7/7f", imgTag: "Marksman" },
  ];

  const filterButtonsLogic = (event) => {
    if (!event.path[1].classList.contains("onclick")) {
      allButtons.forEach((el) => el.classList.remove("onclick"));
      event.path[1].classList.add("onclick");
      inputChampion.value = "";
      setActiveFilter(event.target.alt);
    } else if (event.path[1].classList.contains("onclick")) {
      event.path[1].classList.remove("onclick");
      setActiveFilter(null);
    }
  };

  const onKeyUpFromInput = (event) => {
    if (event.target.value) inputsButton.disabled = false;
    else {
      inputsButton.disabled = true;
      setActiveFilter(null);
    }

    if (event.key === "Enter") inputsButton.click();
  };

  const onFocusFromInput = (event) => {
    allButtons.forEach((el) => el.classList.remove("onclick"));
    event.target.value = "";
    inputsButton.disabled = true;
    setActiveFilter(null);
  };

  const onClickInputsButton = () => {
    const championNameFirstLetterUperCase = inputChampion.value.toLowerCase();
    setActiveFilter(championNameFirstLetterUperCase);
  };

  useEffect(() => {
    inputsButton.disabled = true;
  }, []);

  return (
    <header className="header">
      <div className="header__filterButtons">
        {buttonContentProps.map((el) => (
          <FilterButtons
            tag={Object.keys(el)[0]}
            url={el[Object.keys(el)[0]]}
            imgTag={el[Object.keys(el)[1]]}
            onclick={filterButtonsLogic}
            key={Object.keys(el)[0]}
          />
        ))}
      </div>
      <div className="header__searchField">
        <input
          type="text"
          className="header__inputChampion"
          placeholder="Nome do Campeão"
          id="inputChampion"
          onKeyUp={() => onKeyUpFromInput(event)}
          onFocus={() => onFocusFromInput(event)}
        />
        <button
          type="button"
          className="header__buttonSearch"
          id="inputsButton"
          onClick={onClickInputsButton}
        >
          Pesquisar
        </button>
      </div>
    </header>
  );
}
