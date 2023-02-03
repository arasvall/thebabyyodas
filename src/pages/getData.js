import axios from "axios";
export const fetchApi = async (url) => {
    const res = await axios.get(url);
   return new Promise((resolve, reject) => {
    if(res) {
        resolve(res)
    } 
    reject ("cant fetch")
   })
  };