import { useSoldProduct } from "@/app/service/useSoldProduct";
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

interface SoldButtonProps {
  soldId: string;
  onSuccess: () => void;
}

export const SoldAction: React.FC<SoldButtonProps> = ({
  soldId,
  onSuccess,
}) => {
  const { mutate: soldData } = useSoldProduct({
    onSuccess: () => {
      onSuccess();
      toast.success("Data Motor Berhasil Dipindahkan di Sold Stock !");
    },
  });

  const handleSold = (soldId: string) => {
    return () => {
        soldData(soldId);
    }
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          variant="outline"
          className="bg-green-600 hover:bg-green-800 hover:text-white text-white"
        >
          Sold
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Pindahkan Data ini?</AlertDialogTitle>
          <AlertDialogDescription>
            Apakah Motor ini sudah laku?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleSold(soldId)}>Yes</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
