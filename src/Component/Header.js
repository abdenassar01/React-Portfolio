import Nav from "./Nav";
import "../css/comp-header.css";

const Header = (props) => {
  return (
    <div className="header">
      <a href="#main-section" id="logo">
        Portfolio
      </a>
      <Nav />
    </div>
  );
};

export default Header;
