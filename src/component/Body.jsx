import RestraduntCard from "./RestraduntCard";
import "../css/Body.css";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
const Body = () => {
  const API =
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

  const [data, setData] = useState([]);

  const fetchDataAPI = async () => {
    const data = await fetch(API);
    const response = await data.json();
    setData(
      response?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
    );
  };
  useEffect(() => {
    fetchDataAPI();
  }, []);

  const handleFilter = () => {
    const filterDatas = data.filter((ele) => {
      return ele.info.avgRating > 4.2;
    });
    setData(filterDatas);
  };

  return (
    <div className="body">
      <div className="search">
        <button onClick={() => handleFilter()}> Top Rated Restradunt </button>
        <input type="text" />
        <button>Search</button>
      </div>
      {data.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="res-container">
          {data.map((ele) => (
            <RestraduntCard key={ele.info.id} resData={ele.info} />
          ))}
        </div>
      )}
    </div>
  );
};
export default Body;
