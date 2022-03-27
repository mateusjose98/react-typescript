import NavBar from "components/NavBar/NavBar";
import "./styles.css";
import { ReactComponent as MainImage } from "assets/images/main-image.svg";
import ButtonIcon from "components/ButtonIcon";

export default function Home() {
  return (
    <>
      <NavBar />
      <div className="home-container">
        <div className="home-card">
          <div className="home-content-container">
            <div>
              <h1>Conheça o melhor catálogo de produtos</h1>
              <p>
                Ajudaremos você a encontrar os melhores produtos disponíveis no
                mercado.
              </p>
            </div>
            <ButtonIcon />
          </div>
          <div className="home-image-container">
            <MainImage />
          </div>
        </div>
      </div>
    </>
  );
}
