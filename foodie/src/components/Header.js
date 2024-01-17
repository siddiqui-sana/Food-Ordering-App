import { LOGO_URL } from "../utils/constants";
import { useState, useEffect } from "react";
const Header = () => {
  const [loginBtn, setLoginBtn] = useState("Login");
  //useEffect just for example
  //When no dependency array: Then useEffect is called on each re render of the its component.
  //When the dependency array is kept empty => useEffect is called only on the first render.
  //When dependency array has something in it => useEffect only called when something changes in the things mentioned in the dependecy array.
  useEffect(() => console.log("useEffect Called"), [loginBtn]);
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
          <li
            className="item"
            onClick={() => {
              loginBtn === "Login"
                ? setLoginBtn("Logout")
                : setLoginBtn("Login");
            }}
          >
            {loginBtn}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
