import { axiosWithBaseURL } from "../utils";

const findAll = async () => {
  try {
    const res = await axiosWithBaseURL().post('/inventory/query');
    return res.data;
  } catch (err) {
    throw err;
  }
}

export {
  findAll
}