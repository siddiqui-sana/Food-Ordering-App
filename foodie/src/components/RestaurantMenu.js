import React, { useEffect, useState } from "react";
import jsonData from "../apidata.json";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom"; //Will help to get the resId that we can pass dynamically in our API call

const { resId } = useParams; //In line 20 we replace actual resId with this resId liternal

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState({});

  useEffect(() => {
    fetchMenu();
  }, []);

  //Empty dependency array, that means it will be called only first time when page renders for the first time.

  //Fetching was not possible for swiggy API, so using fake json data
  // const fetchMenu = async () => {
  //   const data = await fetch(
  //     "https://swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.406498&lng=78.47724389999999&restaurantId=+resId+&catalog_qa=undefined&submitAction=ENTER"
  //   );
  //   //Convert the above data into json
  //   const json = await data.json(); //Convert Received data to json
  //   console.log(json);
  // };

  //If the above real API call does not work, then you can go for this fake data call in below two lines.

  const fetchMenu = () => {
    const data = jsonData.data;
    setResInfo(data);
    console.log(resInfo); //This gives empty object because the state is not updated immediately.
    console.log(data);
  };

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards?.[0]?.card?.card?.info || {};

  if (!Array.isArray(cuisines)) {
    return <Shimmer />;
  }

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  // if (itemCards === null) { //Now why this is not needed?
  //   return <Shimmer />;
  // }
  // console.log(itemCards);

  return (
    <div className="menu">
      <h3>{name}</h3>
      <h3>{costForTwoMessage}</h3>
      <h3>Menu</h3>
      {itemCards.map((itemCard) => (
        <li key={itemCard?.card?.info?.id}>{itemCard?.card?.info?.name}</li>
      ))}
    </div>
  );
};

export default RestaurantMenu;

//Important: Since we are not using actual data, hence we give any resId same page will get rendered.
//If we had actual data, then we would have given the resId of the restaurant whose menu we want to see.
//The is present in the link itself of the API
