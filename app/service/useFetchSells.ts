import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../api/api";

export const useFetchProducts = ({
  onError,
}: {
  onError: (error: any) => void;
}) => {
  return useQuery({
    queryFn: async () => {
      try {
        const response = await axiosInstance.get("sell");
        return response.data; // Assuming you want to return the data part of the response
      } catch (error) {
        onError(error);
        throw error;
      }
    },
    queryKey: ["sell"],
  });
};
