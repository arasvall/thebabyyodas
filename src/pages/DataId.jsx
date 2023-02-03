// import { useEffect, useState } from "react";
// import axios from "axios";
import {fetchApi} from "./getData";
import {useLocation, useParams} from "react-router-dom"

// export default function dataid(){
//     // const [data, setData] = useState("")
//     // const [loading, setLoading] = useState(false)

//     const getLastItem = (thePath) =>
//     thePath.substring(thePath.lastindexOf ("/")+ 1);
const DataId = () => {
     const location = useLocation()
     console.log(location.pathname)
    fetchApi()
    .then((res) => console.log(res))
    .catch(console.log)

    return(<></>)
}

export default DataId;


// }
// function fetchApi (thePath){
//     return fetchData
//     .then(Response => Response.id())
// }
// fetchData("message.txt")
//   .then(data => console.log(data));
// id(people)
// .then(() => {
//     console.log(fetchData);
// })
// .catch(() => {
//     console.log(people);
// })

