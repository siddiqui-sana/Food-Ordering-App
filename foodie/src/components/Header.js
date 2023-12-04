import { LOGO_URL } from "../utils/constants";
const Header = () => {
  return (
    <div className="header">
      <div classname="logo-container">
        <img className="logo" src={LOGO_URL} alt="Logo" />
      </div>
      <div classNmae="nav-items">
        <ul className="navbar">
          <li className="item">Home</li>
          <li className="item">About</li>
          <li className="item">Contact</li>
          <li className="item">Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
