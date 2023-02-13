import { GET, PATCH, POST, PUT } from "./api";

export const getDetailsOfCustomer = (id) => {
  return GET(`/users/${id}`);
};

//new
export const getAllCustomerAccountinfo = () => {
  return GET(`/accounts?user_id=1`);
};

export const setupdateUser = async (users) => {
  return PUT(`/users/${users.user.id}`, users); //  return PATCH(`/users/${users.user.id}`, users);
};

export const getAccountDetailsOfUser = (id) => {
  return GET(`accounts?user_id=${id}`);
};

export const getAllTransactionsOfUser = (id) => {
  return GET(`transactions?user_id=${id}`);
};

export const setMakeTransaction = async (users) => {
  console.log("post", users);
  return POST(`/transactions`, users); //  return PATCH(`/users/${users.user.id}`, users);
};
