import React from "react";
import Body from "./body";
import Navbar from "./navbar";

const navbarContent = {
  person: "Admin",
  addCustomer: "Add Customer",
  customerList: "Customer List",
  getAllAccounts: "Get All Accounts",
};

const AdminDashboard = () => {
  // const data=local....
  return (
    <>
      <Navbar navbarContent={navbarContent} />
      <Body navbarContent={navbarContent} />
    </>
  );
};

export default AdminDashboard;
