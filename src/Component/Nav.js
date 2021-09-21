import "../css/comp-nav.css";

const Nav = () => {
  return (
    <nav>
      <ul className="nav-list">
        <li className="nav-item">
          <a href="#main-section">Home</a>
        </li>
        <li className="nav-item">
          <a href="#cv-section">CV</a>
        </li>
        <li className="nav-item">
          <a href="#contact-section">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
