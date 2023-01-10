import "./style.scss";

export const ChampionSpells = (props) => {
  const PASSIVE_COMPONENT = (
    <>
      <img
        className="skill__header__leftPart__image"
        src={`https://ddragon.leagueoflegends.com/cdn/12.23.1/img/passive/${props.image}`}
        alt="skill image"
      />
      <h1>{props.name}</h1>
      <p className="skill__header__leftPart__passive">passiva</p>
    </>
  );

  const SKILLS_COMPONENT = (
    <>
      <div className="skill__header__leftPart">
        <img
          className="skill__header__leftPart__image"
          src={`http://ddragon.leagueoflegends.com/cdn/12.23.1/img/spell/${props.image}`}
          alt="skill image"
        />
        <h1>{props.name}</h1>
      </div>
      <div className="skill__header__rightPart"></div>
    </>
  );

  return (
    <section className="skill">
      <div className="skill__header">
        <div className="skill__header__leftPart">
          {props.elementFilter === "passive" ? PASSIVE_COMPONENT : SKILLS_COMPONENT}
        </div>
      </div>
      <div className="skill__main">
        <p className="skill__main__description">{props.description}</p>
      </div>
    </section>
  );
};
