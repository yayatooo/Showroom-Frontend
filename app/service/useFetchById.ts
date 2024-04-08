import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../api/api";

export const useFetchById = ({
  sellId,
  onError,
}: {
  sellId: string;
  onError: (error: any) => void;
}) => {
  return useQuery({
    queryFn: async () => {
      try {
        const response = await axiosInstance.get(`sell/${sellId}`);
        return response.data;
      } catch (error) {
        onError(error);
        throw error;
      }
    },
    queryKey: ["sell", sellId],
  });
};
