
import axios from "axios";



export default axios.create({
    baseURL: "http://localhost:5000/",
    // baseURL: process.env.REACT_APP_BACKEND_URL,
    // withCredentials: true,
    credentials:"include"    
})