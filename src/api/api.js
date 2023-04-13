
import axios from "axios";



export default axios.create({
    // baseURL: "http://localhost:5000/",
    baseURL: "smart-ana-backend-production-7c8e.up.railway.app",
    // withCredentials: true,
    credentials:"include"    
})
