import axios from "axios";

import Cookies from "js-cookie";

const authAxios = axios.create({
  baseURL: "http://localhost:3001",
});

//Add a response interceptor

authAxios.interceptors.response.use(
  (response) => {
    return response;
  },
  function (error) {
    const originalRequest = error.config;

    if (
      error.response.status === 401 &&
      originalRequest.url === "users/refreshToken"
    ) {
      return Promise.reject(error);
    }

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const refreshToken = Cookies.get("refreshToken");
      return axios
        .post(
          `http://localhost:3001/users/refreshToken`,
          {},
          { withCredentials: true }
        )
        .then((res) => {
          if (res.status === 200) {
            return Promise.resolve();
          }
        });
    }
    return Promise.reject(error);
  }
);

export default authAxios;
