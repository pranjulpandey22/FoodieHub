import '../css/RestraduntCard.css';

const RestraduntCard = ({ resData}) => {

  return (
    <div className="res-card">
      <img
        className="resImage"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/7b4d4881a89da72cbf421dd5cde7dd3c"
        alt=""
      />
      <span>{resData.name}</span>
      <span> 5 KM </span>
      <span>{resData.avgRatings}</span>
      <h5>{resData.cusines.join(',')} </h5>
  
    </div>
  );
};
export default RestraduntCard;