import { useState, useContext, useEffect } from "react";
import "./style.scss";
import { Card } from "../Card";
import { useNavigate } from "react-router-dom";
import { FilterContext } from "../../contexts/FilterContext";

export function Main() {
  const [championsList, setChampionsList] = useState({ name: "", title: "" });
  const [finallyState, setFinallyState] = useState(true);
  const { activeFilter } = useContext(FilterContext);

  const navigate = useNavigate();

  const cardClickLogic = (championName) => {
    navigate(`/champion/${championName}`);
  };

  useEffect(() => {
    async function getApiAsync() {
      const response = await fetch(
        "http://ddragon.leagueoflegends.com/cdn/12.23.1/data/pt_BR/champion.json"
      );
      const data = await response.json();
      const championsValues = Object.values(data.data);

      setChampionsList(championsValues);
    }

    getApiAsync()
      .catch((error) => console.error("Erro ao carregar a API", error))
      .finally(() => setFinallyState(false));
  }, []);

  if (finallyState) return "loading...";

  return (
    <main>
      {championsList
        ?.filter((champion) =>
          activeFilter ? champion.tags.includes(activeFilter) : champion
        )
        .map((el) => (
          <Card
            name={el.name}
            title={el.title}
            img={el.image.full}
            key={el.key}
            onclickLogic={cardClickLogic}
          />
        ))}
    </main>
  );
}
