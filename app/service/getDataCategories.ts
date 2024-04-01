import axios from "axios";

const dataCategories = async () => {
  const api = "http://localhost:5000/category/";
  const response = await axios.get(api);
  if (response.status !== 200) {
    throw new Error("Could not get Category Bike");
  }
  return response.data.data;
};

export default dataCategories;
