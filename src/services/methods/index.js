import axios from "axios";

const config = {
  headers: {
    accept: "*/*",
    "Content-Type": "application/json",
  },
};

const getAll = async (endpoint) => {
  const response = await axios.get(endpoint, config);
  return response.data;
};

export { getAll };
