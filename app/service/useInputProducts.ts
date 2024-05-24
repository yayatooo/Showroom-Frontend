import { axiosInstance } from "../api/api";
import { useMutation } from "@tanstack/react-query";
import { DataBike } from "../type/dataBike";

export interface DataProducts {
    policeNumber: string; 
    category: string; 
    name: string; 
    frameNumber: string;
    capitalPrice: string; 
    price: string;
  }
  

export const useInputProducts = ({
  data,
  onSuccess,
}: {
  data: DataProducts;
  onSuccess: () => void;
}) => {
  return useMutation({
    mutationFn: async () => {
      const response = await axiosInstance.post("sell", { data });
      return response;
    },
    onSuccess,
  });
};
// export const useInputProducts = ({
//   data,
//   onSuccess,
// }: {
//   data: {
//     name: string;
//     policeNumber: string;
//     categoryBike: string;
//     frameNumber: string;
//     capitalPrice: string;
//     price: string;
//   };
//   onSuccess: () => void;
// }) => {
//   return useMutation({
//     mutationFn: async () => {
//       const response = await axiosInstance.post("/sell", { data });
//       return response;
//     },
//     onSuccess,
//   });
// };
// export const useInputProducts = ({ onSuccess }: { onSuccess: () => void }) => {
//   return useMutation({
//     mutationFn: async (body) => {
//     //   const { policeNumber, categoryBike, name, frameNumber } = formik.values;
//     //   const capitalPrice = formik.values.capitalPrice.toString();
//     //   const price = formik.values.price.toString();

//       const response = await axiosInstance.post("sell/", body,);

//       return response;
//     },
//     onSuccess
//   });
// };
