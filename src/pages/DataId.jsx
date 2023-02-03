// import { useEffect, useState } from "react";
// import axios from "axios";
import {fetchApi} from "./getData";
import {useLocation, useParams} from "react-router-dom"

const DataId = () => {
     const location = useLocation()
     console.log(location.pathname)
    fetchApi()
    .then((res) => console.log(res))
    .catch(console.log)

    return(<></>)
}

export default DataId;
