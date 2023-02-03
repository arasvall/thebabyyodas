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

  return <div>{location.pathname ? location.pathname  : "cant not get the url pathname"}</div>;
}



  
