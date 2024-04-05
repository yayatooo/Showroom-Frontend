import axios from "axios";
import { DataBike } from "../type/dataBike";

const BASE_URL = "http://localhost:5000/"
export const axiosInstance = axios.create({baseURL: BASE_URL})

export const getProducts = async () => {
  return (await axiosInstance.get<DataBike[]>("sell"));
};

export const getProductsId = async (_id: string) => {
  return (await axiosInstance.get<DataBike[]>(`sell/${_id}`)).data.map((item) => item._id);
};

export const getProductsSold = async () => {
  return (await axiosInstance.get<DataBike[]>("sold")).data
};

export const deleteProducts = async (_id: string) => {
  await axios.delete(`http://localhost:5000/sell/${_id}`);
};
