import axios from "axios";

export const createJWTToken = (token) => {
  return `Bearer ${token}`;
};

const tokenValue = localStorage.getItem("accessToken");

const axiosInstance = axios.create({
  headers: {
    "Content-Type": "application/json",
    Authorization: createJWTToken(tokenValue),
  },
  timeout: 3000,
});

axiosInstance.interceptors.response.use(
  (config) => {
    return config;
  },
  (error) => {
    let res = error.response.data;
    let errCode = res.code.toString();

    console.log("errCode", errCode);
    return Promise.reject(error);
  }
);

export { axiosInstance };
