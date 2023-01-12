import "./style.scss";
import { Footer } from "../../components/Footer";
import { ChampionInfoContent } from "../../components/ChampionInfoContent";

export function ChampionInfo() {
  return (
    <div className="container">
      <ChampionInfoContent />
      <Footer />
    </div>
  );
}
