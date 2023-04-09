import axios from "axios";



const instance = axios.create({
  baseURL: "http://localhost:8012/",
});



export default instance;
