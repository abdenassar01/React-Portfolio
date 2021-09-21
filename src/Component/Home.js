import "../css/comp-home.css";
import manTransparent from "../imgs/Man-PNG-File.png";

const Home = () => {
  return (
    <div className="home-section">
      <div className="greeting-paragraph">
        <h1>
          Hi,<span className="greeting-item"> I'm </span>
        </h1>
        <p>Web Front-End Developper</p>
      </div>
      <div className="shape">
        <div className="canvas">
          <img
            src={manTransparent}
            className="main-image"
            alt="Man Transparent"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
