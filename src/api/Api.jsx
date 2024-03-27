import axios from "axios";

const instance = axios.create({
  // .. congigure axios baseURL

  baseURL: "https://zen-dashboard-be.onrender.com"             //https://zen-student-dashboard.onrender.com/ http://localhost:8000

});



export default instance;