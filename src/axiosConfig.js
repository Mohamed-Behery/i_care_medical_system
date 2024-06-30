import axios from "axios";

const instance = axios.create({
  baseURL: "https://icare48.000webhostapp.com/api",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;
