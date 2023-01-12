import "./style.scss";
import { Header } from "../../components/Header";
import { Main } from "../../components/Main";
import { Footer } from "../../components/Footer";

export function Home() {
  return (
    <div className="container">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
