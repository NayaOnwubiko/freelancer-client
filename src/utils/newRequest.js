import axios from "axios";

const newRequest = axios.create({
  baseURL: "https://freelancer-api-o9p0.onrender.com/api/",
  withCredentials: true,
});

export default newRequest;
