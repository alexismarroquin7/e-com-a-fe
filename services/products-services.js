import { axiosWithBaseURL } from "../utils";

const findAll = async () => {
  try {
    const res = await axiosWithBaseURL().post('/products/query');
    return res.data;
  } catch (err) {
    throw err;
  }
}

const findByProductId = async (product_id) => {
  try {
    const res = await axiosWithBaseURL().get(`/products/${product_id}`);
    return res.data;
  } catch (err) {
    throw err;
  }
}

export {
  findAll,
  findByProductId
}