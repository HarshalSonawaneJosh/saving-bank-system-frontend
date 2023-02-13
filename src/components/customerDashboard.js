import React from "react";
import { useParams } from "react-router-dom";
import CustomerBody from "./customerComponents/customerBody";
import Navbar from "./navbar";

const navbarContent = {
  person: "Customer",
  userDetails: "User Details",
  customerDetails: "User Details",
  accountDetails: "Account Details",
  getAllTransactionsOfUser: "All Transactions",
  newTransaction: "New Transaction",
};

const CustomerDashboard = () => {
  const { id } = useParams();
  //   console.log("customre_id is in customer dashboard", id);
  return (
    <>
      <Navbar navbarContent={navbarContent} />
      <CustomerBody navbarContent={navbarContent} id={id} />
    </>
  );
};

export default CustomerDashboard;
