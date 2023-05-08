import axios from "axios";

export const instance = axios.create({
  baseURL: process.env.SERVER,
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});

export const baseURL = axios.create({
  baseURL: process.env.SERVER,
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});

//인스턴스 request header
baseURL.interceptors.request.use((config) => {
  if (config.headers === undefined) return;
  const token = sessionStorage.getItem("AccessToken");
  config.headers["Authorization"] = `${token}`;
  return config;
});