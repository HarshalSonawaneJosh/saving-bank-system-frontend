import axios from "axios";

export const addAccount = async (account) => {
  const token = localStorage.getItem("authToken");
  return await axios
    .post("http://localhost:3000/accounts", account, {
      headers: { Authorization: token },
    })
    .then((res) => res.data);
};

//for customers

export const addCustomer = async (users) => {
  const token = localStorage.getItem("authToken");
  return await axios
    .post("http://localhost:3000/users", users, {
      headers: { Authorization: token },
    })
    .then((res) => res.data);
};

export const deleteUser = async (userId) => {
  const token = localStorage.getItem("authToken");

  return await axios
    .delete(`http://localhost:3000/users/${userId}`, {
      headers: { Authorization: token },
    })
    .then((res) => res.data);
};

export const fetchUsers = async () => {
  const token = localStorage.getItem("authToken");
  const response = await axios.get("http://localhost:3000/users", {
    headers: { Authorization: token },
  });

  return response.data;
};

//getting customer by first name.
export const fetchUserByFirstName = async (data) => {
  const token = localStorage.getItem("authToken");
  const response = await axios.get(
    `http://localhost:3000/users/search_customer?name=${data.name}`,
    {
      headers: { Authorization: token },
    }
  );

  return response.data;
};

export const fetchUser = async (userId) => {
  const token = localStorage.getItem("authToken");
  const response = await axios.get(`http://localhost:3000/users/${userId}`, {
    header: { Authorization: token },
  });

  return response.data;
};

// get account details.

export const fetchCustmerAccountInfo = async () => {
  const token = localStorage.getItem("authToken");
  console.log(token, "token");
  const response = await axios.get("http://localhost:3000/accounts?user_id=1", {
    header: { Authorization: token },
  });

  return response.data;
};
