import { useState, useEffect } from "react";
import axios from "axios";
import {useLocation,} from "react-router-dom"
import {fetchApi} from "./getData"

export default function Page () { 
  const location = useLocation()
  const [data, setData] = useState([]);
  const [array, setArray] = useState(null)


  fetchApi(`https://swapi.dev/api`)
  .then((res) => console.log(res))
  .catch(console.log)

  // let id = [
  //   "people", 
  //   "planets", 
  //   "films", 
  //   "species", 
  //   "vehicles", 
  //   "starships"
  // ];

  // const fetchApi = async () => {
  //   const res = await axios.get(`https://swapi.dev/api`);
  //  return new Promise((resolve, reject) => {
  //   if(res) {
  //       setData(res)
  //       resolve(res)
  //   } 
  //   reject ("cant fetch")
  //  })
  // };



  // useEffect(() => {
  //  if (array !== null) {
  //    fetchId() 
  //  }
 
  // }, [array]);

  return <div>{location.pathname ? location.pathname  : "cant not get the url pathname"}</div>;
}



  
