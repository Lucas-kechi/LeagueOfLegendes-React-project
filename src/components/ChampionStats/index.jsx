import "./style.scss";

export const ChampionStats = (props) => {
  const statsWithoutFixed = ["HP", "MP", "Move Speed", "ATK Range"];

  return (
    <div className="stats">
      {props.stat}:&nbsp;
      <span className="stats__value">
        {statsWithoutFixed.includes(props.stat)
          ? props.value
          : props.value.toFixed(2)}
      </span>
    </div>
  );
};
