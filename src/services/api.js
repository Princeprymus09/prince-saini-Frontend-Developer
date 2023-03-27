import axios from "axios";

  export const fetchData=async(path)=>{
     
    try {
       return await axios.get(path)
    } catch (error) {
        console.log("eroor while fetching data" , error)
    }
  }

