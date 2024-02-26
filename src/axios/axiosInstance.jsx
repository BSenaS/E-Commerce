import axios from "axios";

const createAxiosInstance = () => {
  return axios.create({
    baseURL: "https://workintech-fe-ecommerce.onrender.com/",
  });
};

export const AxiosInstance = createAxiosInstance();
