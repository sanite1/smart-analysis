
import axios from "axios";



export default axios.create({
    // baseURL: "http://localhost:5000/",
    baseURL: "https://smart-ana-backend-production.up.railway.app",
    // withCredentials: true,
    credentials:"include"    
})