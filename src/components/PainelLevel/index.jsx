import "./style.scss";
import {
  IconDashCircle,
  IconPlusCircle,
} from "../../assets/svgsAsComponents.jsx";

export const PainelLevel = (props) => {
  return (
    <div className="leftPart__contentBottom__lvlPainel">
      <button
        className="leftPart__lvlPainel__buttonDash"
        onClick={() => props.buttonsPainelLogic(event)}
      >
        <IconDashCircle height="1rem" width="1rem" />
      </button>
      <input
        type="text"
        id="ChampionLvl"
        name="ChampionLvl"
        className="leftPart__lvlPainel__input"
        value={props.levelRef + 1}
        readOnly
      />
      <button
        className="leftPart__lvlPainel__buttonPlus"
        onClick={() => props.buttonsPainelLogic(event)}
      >
        <IconPlusCircle height="1rem" width="1rem" />
      </button>
    </div>
  );
};
