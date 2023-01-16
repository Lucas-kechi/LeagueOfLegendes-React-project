import { ChampionInfos } from "../ChampionInfos";
import { ChampionSpells } from "../ChampionSpells";
import { Loading } from "../Loading";
import "./style.scss";

export function ContentRightPart(props) {
  if (props.request) {
    return <Loading />;
  }

  return (
    <div className="rightPart">
      <header className="rightPart__header">
        <h1 className="rightPart__h1">{props.name}</h1>
        <h2>{props.titleMoment}</h2>
      </header>
      <div className="rightPart__tags">
        {props.tags.map((tag) => (
          <span key={tag}> {tag} </span>
        ))}
      </div>
      <div className="rightPart__info">
        {props.info.map(([key, value]) => (
          <ChampionInfos infoName={key} infoValue={value} key={key} />
        ))}
      </div>
      <div className="rightPart__lore">{props.lore}</div>
      <div className="rightPart__Spells">
        <ChampionSpells
          image={props.passive.image.full}
          elementFilter={props.passive.image.group}
          name={props.passive.name}
          description={props.passive.description}
          key={props.passive.name}
        />
        {props.spells.map((el) => (
          <ChampionSpells
            key={el.id}
            name={el.name}
            description={el.description}
            levelTip={el.leveltip}
            maxRank={el.maxrank}
            cooldownBurn={el.cooldownBurn}
            costBurn={el.costBurn}
            effectBurn={el.effectBurn}
            vars={el.vars}
            rangeBurn={el.rangeBurn}
            image={el.image.full}
          />
        ))}
      </div>
    </div>
  );
}
