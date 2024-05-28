import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ErrorMessage({message}) {
  useEffect(() => {
    toast.error(message);
  }, []);
  return <ToastContainer />;
}

export default ErrorMessage