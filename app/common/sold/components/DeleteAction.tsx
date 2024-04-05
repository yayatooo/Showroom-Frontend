import { useDeleteSold } from "@/app/service/useDeleteSold";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { toast, Toaster } from "sonner";

interface DeleteButtonProps {
  soldId: string;
  onSuccess: () => void;
}

export const DeleteAction: React.FC<DeleteButtonProps> = ({
  soldId,
  onSuccess,
}) => {
  const { mutate: deletedData } = useDeleteSold({
    onSuccess: () => {
      onSuccess();
      toast.success("Data Motor Berhasil dihapus !");
    },
  });

  const handleDelete = (soldId: string) => {
    return () => {
        deletedData(soldId);
    }
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          variant="outline"
          className="bg-red-600 hover:bg-red-800 hover:text-white text-white"
        >
          Delete
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Hapus data ini?</AlertDialogTitle>
          <AlertDialogDescription>
            Aksi ini dapat menghapus data motor anda secara permanen
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleDelete(soldId)}>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
