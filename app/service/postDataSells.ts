import axios from "axios";
import { useMutation } from "@tanstack/react-query";

interface PostDataSellsProps {
  onSuccess?: () => void;
}

export const postDataSells = ({onSuccess}: PostDataSellsProps) => {
  const api = "http://localhost:5000/sell/";
  return useMutation({
    mutationFn: async (body) => {
      const response = await axios.post(api, body)

      return response
    },
    onSuccess
  })
}
