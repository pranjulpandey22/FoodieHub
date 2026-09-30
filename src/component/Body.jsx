import RestraduntCard from "./RestraduntCard";
import '../css/Body.css'
import {useState} from 'react'
const Body = () => {
  const MockData = [
  {
    data: {
      id: 23424,
      name: 'KFC',
      cusines: ['burger', 'briyani', 'Snacks'],
      avgRatings: '4.1'
    }
  },
  {
    data: {
      id: 23425,
      name: 'Dominos',
      cusines: ['burger', 'briyani', 'Snacks'],
      avgRatings: '3'
    }
  },
  {
    data: {
      id: 23426,
      name: 'Pizza Hut',
      cusines: ['burger', 'briyani', 'Snacks'],
      avgRatings: '4.9'
    }
  }
];


  const[filterData,setFilterData]= useState(MockData)

  const handleFilter = ()=>{
   const filterDatas= MockData.filter((ele)=>{
      return ele.data.avgRatings > 4
    })
    setFilterData(filterDatas)
  }
  console.log(filterData,'adsasd')

  return (
    <div>
      <div className="search">
        <button onClick={()=>handleFilter()}> Top Rated Restradunt </button>
        <input type="text" />
        <button>Search</button>
      </div>
      <div className="res-container">
        {filterData.map((ele)=>{
          return(
            <div key={ele.data.id}>
               <RestraduntCard  resData={ele.data}/>
            </div>
          )
        })}
       
      </div>
    </div>
  );
};
export default Body;