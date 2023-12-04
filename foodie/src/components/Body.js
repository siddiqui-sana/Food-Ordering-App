import ResturantCard from "./ResturantCard";
import { data } from "../utils/data";
const Body = () => {
  const filterResturant = () => {};
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            console.log("Button Clicked");
            filterResturant();
          }}
        >
          Top Rated
        </button>
      </div>
      <div className="res-container">
        {data.map((obj) => (
          <ResturantCard key={obj.info.id} resData={obj} />
        ))}
        {/* //Remember: resData key is same name will be passed as wrapped in prop */}
      </div>
    </div>
  );
};

export default Body;
