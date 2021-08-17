import axios from "axios";
const instance  = axios.create({baseURL:"https://api.themoviedb.org/3"});
export default instance; 

//import axios from "./path/instance"
//axios.get('/movie/..'); 
//https://api.themoviedb.org/3/movie/550?api_key=be81f71bff803ea3ed0cceb7d6be4eb5