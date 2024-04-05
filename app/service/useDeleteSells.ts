import { axiosInstance } from "../api/api";
import { useMutation } from "@tanstack/react-query";

export const useDeleteSell = ({ onSuccess }: { onSuccess: () => void }) => {
    // Call useMutation unconditionally at the top level
    const mutation = useMutation({
        mutationFn: async (_id: string) => {
            const response = await axiosInstance.delete(`sell/${_id}`);
            return response;
        },
        onSuccess,
        onError: (error: any) => {
            console.error("An error occurred:", error);
        }
    });

    return mutation;
};
