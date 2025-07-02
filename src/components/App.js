import React, { useEffect, useState } from "react";
 
import Loader from "./Loader";
import Tours from "./Tours";


const url =  "https://www.course-api.com/react-tours-project";

const App =  () => {
  const[loading,setLoading] = useState(false);
  const[tourdata,setTourData]  = useState([]);
  
  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(url)
      const t = await response.json();
      setTourData(t);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };
  
useEffect(()=>{
   fetchData();
},[]);
   console.log("what is data come from Api",tourdata);
    return(
      <main id="main">
        {
          tourdata.length===0  && (
            
            <button onClick={()=>fetchData()}>Refresh</button>
          )
        }

        {
          loading ? (<Loader></Loader>):(<Tours data={tourdata} setTourData={setTourData} ></Tours>)
        }
      </main>
    )
}
export default App;
