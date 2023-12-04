import { CDN_URL } from "../utils/constants";
const ResturantCard = (props) => {
  console.log("Type of the props: ", typeof props);
  //prop is always an object, we can de structure the prop like:
  // **const ResturantCard = ({name, speciality, rating, deliverytime}) => {** Remember the key name should be same as passed in the caller component.
  const cardStyle = { backgroundColor: "#D3D3D3" };
  const { resData } = props;
  // const { name, speciality, rating, deliverytime } = props;
  // console.log(name, speciality, rating, deliverytime);
  const infoObj = resData.info;
  console.log(infoObj);
  console.log("What is this");
  const { name, cuisines, avgRating, cloudinaryImageId } = infoObj; //Destructuring for cleaner code.
  //Which ever key we want to from infoObj, we get here, so agian again we
  //don't need to do infoObj.PROPERTY_NAME
  return (
    //Whenever we write any javascript in jsx, we do that in curly braces
    <div className="res-card" style={cardStyle}>
      <img className="img" alt="" src={CDN_URL + cloudinaryImageId} />
      {/* If you had done destructuring as in line 26, the variables in the array would have got directly the values. */}
      <h3>{name}</h3>
      <h3>{cuisines.join(", ")}</h3>
      {/* Way of writing if destructuring had not been done */}
      <h3>{infoObj.avgRating}</h3>
    </div>
  );
};

export default ResturantCard;
