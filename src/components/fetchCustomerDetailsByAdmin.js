import React from "react";
import { useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import { getDetailsOfCustomer } from "../customerServices/customerServices";
import CustomerDetails from "./customerComponents/showCustomerDetails";
import Navbar from "./navbar";

const FetchCustomerDetailsByAdmin = () => {
  const { id } = useParams();
  console.log("updateCustomerDetailsByAdmin", id);
  const navigate = useNavigate();

  console.log("getCustomerDetails", id);
  const { data, isLoading, error } = useQuery("detail-key", () => {
    return getDetailsOfCustomer(id);
  });
  if (isLoading) {
    return <div>Loading...</div>;
  }

  const navbarContent = {
    person: "Admin",
  };
  return (
    <div>
      <Navbar navbarContent={navbarContent} />
      <CustomerDetails data={data} />
    </div>
  );
};

export default FetchCustomerDetailsByAdmin;
