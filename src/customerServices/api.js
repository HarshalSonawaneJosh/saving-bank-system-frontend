import axios from "axios";

const instance = axios.create({ baseURL: "http://localhost:3000" });

instance.interceptors.request.use((config) => {
  const token = localStorage.getItem("authToken");
  config.headers = {
    ...config.headers,
    Authorization: token,
  };
  console.log(config);
  return config;
});

export const GET = (url, params) => {
  return instance.get(url).then((res) => res.data);
};

export const POST = (url, users) => {
  return instance.post(url, users).then((res) => res.data);
};

export const PATCH = (url, users) => {
  return instance.patch(url, users).then((res) => res.data);
};

export const PUT = (url, users) => {
  return instance.put(url, users).then((res) => res.data);
};

export const DELETE = (url, params) => {
  return instance.delete(url).then((res) => res.data);
};
