import axios from "axios";

const api = axios.create({
  // baseURL: "https://icare48.000webhostapp.com/api/clinic",
  baseURL: "http://icare44.infinityfreeapp.com/api/clinic",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
