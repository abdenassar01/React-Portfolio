import "../css/comp-nav.css";

const Nav = (props) => {
  return (
    <nav className={props.class}>
      <ul className="nav-list">
        <li className="nav-item">
          <a href="#main-section">Home</a>
        </li>
        <li className="nav-item">
          <a href="#cv-section">About</a>
        </li>
        <li className="nav-item">
          <a href="#contact-section">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
