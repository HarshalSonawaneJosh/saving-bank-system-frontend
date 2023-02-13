import React from "react";
import { useQuery } from "react-query";
import { getAllCustomerAccountinfo } from "../customerServices/customerServices";
import { useGetAllCustomerAccountinfo } from "../hooks/addAccount.hooks";
import Navbar from "./navbar";
import ShowAllAccounts from "./showAllAccounts";

const GetAllAccounts = () => {
  const { data: AllUserAccountDetails, isLoading } =
    useGetAllCustomerAccountinfo();

  if (isLoading) {
    <div>Loading...</div>;
  }

  const navbarContent = {
    person: "Admin",
  };
  return (
    <div>
      <Navbar navbarContent={navbarContent} />

      <ShowAllAccounts data={AllUserAccountDetails} />
    </div>
  ); //remaining
};

export default GetAllAccounts;
