import axios from "axios";

export const setupAxiosInterceptors = () => {
  axios.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.message === "Network Error") {
        window.location = "/maintenance";
      }
      if (error.response && error.response.status === 500) {
        window.location = "/maintenance";
      }

      return Promise.reject(error);
    }
  );
};
