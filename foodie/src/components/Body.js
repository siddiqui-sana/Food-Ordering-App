import ResturantCard from "./ResturantCard";
import { data } from "../utils/data";
import { useState } from "react";
const Body = () => {
  const [list, setList] = useState(data);
  const filterResturant = () => {
    setList(list.filter((res) => res.info.avgRating > 4));
    console.log(list);
  };
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
        {list.map((obj) => {
          console.log(obj);
          return <ResturantCard key={obj.info.id} resData={obj} />;
        })}
        {/* //Remember: resData key is same name will be passed as wrapped in prop */}
      </div>
    </div>
  );
};

export default Body;
