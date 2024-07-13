import { axiosInstance } from "../api/api";
import { useMutation } from "@tanstack/react-query";

interface AuthLoginProps {
  email: string;
  password: string;
}

interface LoginResponse {
  token: string;
}

export const setAuthLogin = ({
  data,
  onSuccess,
  onError, // <--- Add onError callback
}: {
  data: AuthLoginProps;
  onSuccess: () => void;
  onError: (error: Error) => void; // <--- Define onError callback type
}) => {
  return useMutation({
    mutationFn: async () => {
      const response = await axiosInstance.post("login", data);
      return response.data as LoginResponse;
    },
    onSuccess,
    onError, // <--- Pass onError callback to useMutation
  });
};

// export default setAuthLogin;


