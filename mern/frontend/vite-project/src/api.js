import axios from "axios";

const API = axios.create({
  baseURL: "https://mern-ai-1-42oq.onrender.com/api",
  headers: {
    "Content-Type": "application/json"
  }
});

export default API;