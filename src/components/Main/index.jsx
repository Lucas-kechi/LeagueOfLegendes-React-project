import { useState, useContext, useEffect } from "react";
import "./style.scss";
import { Card } from "../Card";
import { useNavigate } from "react-router-dom";
import { FilterContext } from "../../contexts/FilterContext";
import { Loading } from "../Loading";

export function Main() {
  const [championsList, setChampionsList] = useState([]);
  const [finallyState, setFinallyState] = useState(true);
  const { activeFilter, setActiveFilter } = useContext(FilterContext);
  let championsAfterFilter = championsList;
  const navigate = useNavigate();

  const cardClickLogic = (championName) => {
    navigate(`/champion/${championName}`);
    setActiveFilter(null);
  };

  championsAfterFilter = championsList?.filter((champion) =>
    activeFilter
      ? champion.tags.includes(activeFilter) ||
        champion.name.toLowerCase().includes(activeFilter)
      : champion
  );

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

  if (finallyState) return <Loading />;

  if (championsAfterFilter.length === 0) {
    alert("Campeão inserido não encontrado!");
    return (
      <main>
        {championsList.map((el) => (
          <Card
            name={el.name}
            title={el.title}
            img={el.image.full}
            key={el.key}
            id={el.id}
            onclickLogic={cardClickLogic}
          />
        ))}
      </main>
    );
  }

  return (
    <main>
      {championsAfterFilter.map((el) => (
        <Card
          name={el.name}
          title={el.title}
          img={el.image.full}
          key={el.key}
          id={el.id}
          onclickLogic={cardClickLogic}
        />
      ))}
    </main>
  );
}
