import ResturantCard from "./ResturantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [list, setList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const filterResturant = () => {
    setList(list.filter((res) => res.info.avgRating >= 4));
    setFilteredList(list.filter((res) => res.info.avgRating >= 4));
    console.log(list);
  };
  const filterByText = () => {
    setFilteredList(list.filter((res) => res.info.name.includes(searchText)));
  };

  useEffect(() => {
    console.log("useEffect Called"); //This will be console logged after the line 13. Because first the body is rendered.
    fetchData();
  }, []);
  console.log("Body Called");
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    ); //(fetch function is geiven by browser that the JS engine has)
    const json = await data.json();
    console.log(json?.data.card);
    // setList(
    //   json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    // );
    //Instad of setting the data as done in above fucntion call, we can use the concept of optional chaining (better way to handle data, just put question mark before every dot)
    setList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  //For showing loading screen until the API hasn't been fetched after the page render: (Conditional Rendering)
  // if (list.length === 0) {
  //   return <Shimmer />;
  // }

  //Conditional Rendering

  return list.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              filterByText();
              console.log(searchText);
            }}
          >
            Search
          </button>
        </div>

        <button
          className="filter-btn"
          onClick={() => {
            filterResturant();
          }}
        >
          Top Rated
        </button>
      </div>
      <div className="res-container">
        {filteredList.map((obj) => {
          return (
            <Link to={"/restaurants/" + obj.info.id} key={obj.info.id}>
              {/* //This is the dynamic path, so the id will be dynamic. Inside the restaurants component, we can access this dynamic path using useParams hook. */}
              <ResturantCard resData={obj} />
            </Link>
          );
        })}
        {/* //Remember: resData key is same name will be passed as wrapped in prop */}
      </div>
    </div>
  );
};

export default Body;
