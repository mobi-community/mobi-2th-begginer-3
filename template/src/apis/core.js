import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "/",
  headers: {
    Authorization: "", //token
  },
  withCredentials: true,
});