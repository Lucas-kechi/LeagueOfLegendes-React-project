import { useEffect } from "react";
import "./style.scss";

export const ChampionInfos = (props) => {
  useEffect(() => {
    const spansToPaint = document.querySelectorAll(".information span");

    spansToPaint.forEach((el) => {
      if (el.id === props.infoName && el.className <= props.infoValue)
        el.classList.add("on");
    });
  }, []);

  return (
    <div className="information">
      {props.infoName}:<span className="1" id={props.infoName}></span>
      <span className="2" id={props.infoName}></span>
      <span className="3" id={props.infoName}></span>
      <span className="4" id={props.infoName}></span>
      <span className="5" id={props.infoName}></span>
      <span className="6" id={props.infoName}></span>
      <span className="7" id={props.infoName}></span>
      <span className="8" id={props.infoName}></span>
      <span className="9" id={props.infoName}></span>
      <span className="10" id={props.infoName}></span>
    </div>
  );
};
