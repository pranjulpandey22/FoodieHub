import '../css/RestraduntCard.css';
import { Image_url } from '../utils/constant';
const RestraduntCard = ({ resData}) => {
 const {avgRating,name,areaName} = resData
  return (
    <div className="res-card">
      <img
        className="resImage"
       src={Image_url + resData.cloudinaryImageId}
        alt=""
      />
      <span>{name}</span>
      <span>{areaName} </span>
      <span>{resData.costForTwo}</span>
      <span>{avgRating} ⭐️</span>
      <h5>[{resData.cuisines.join(',')}]</h5>
      <h5>{resData.sla.slaString}</h5>
  
    </div>
  );
};
export default RestraduntCard;