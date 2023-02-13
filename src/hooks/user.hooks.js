import { useMutation } from "react-query";
import { toast } from "react-toastify";
import {
  setMakeTransaction,
  setupdateUser,
} from "../customerServices/customerServices";

export const useUpdateUser = () => {
  return useMutation(setupdateUser, {
    onSuccess: (res) => toast.success(res.message),
    onError: (err) => toast.error(err?.response?.data?.message),
  });
};

export const useMakeTransaction = () => {
  return useMutation(setMakeTransaction, {
    onSuccess: (res) => toast.success(res.message),
    onError: (err) => toast.error(err?.response?.data?.message),
  });
};
