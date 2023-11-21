const Header = () => {
  return (
    <div className="header">
      <div classname="logo-container">
        <img
          className="logo"
          src="https://t3.ftcdn.net/jpg/04/03/74/22/360_F_403742248_8DDzcFF4jw05lWqftk2yxzKRpFvpZ01Y.jpg"
          alt="Logo"
        />
      </div>
      <div classNmae="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
function App() {
  return (
    <div className="App">
      {/* //Header
      //Body
      //Footer */}
      <Header />
    </div>
  );
}

export default App;
