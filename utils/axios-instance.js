import axios from "axios"

export const axiosWithBaseURL = () => {
  return axios.create({
    baseURL: `http://localhost:4000/api`
  });
}