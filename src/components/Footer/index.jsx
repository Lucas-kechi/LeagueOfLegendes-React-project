import "./style.scss";
import githubSvg from "../../assets/github.svg";

export function Footer() {
  return (
    <footer className="footer">
      <h2>
        Powered By Lucas Kechi
        <a href="https://github.com/Lucas-kechi" target="_blank">
          <img src={githubSvg} alt="Github Icon" className="footer__icon" />
        </a>
      </h2>
    </footer>
  );
}
