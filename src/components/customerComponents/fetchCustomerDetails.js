import React from "react";
import { useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import { getDetailsOfCustomer } from "../../customerServices/customerServices";
import Navbar from "../navbar";
import CustomerDetails from "./showCustomerDetails";

const GetCustomerDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  console.log("getCustomerDetails", id);
  const { data, isLoading, error } = useQuery("detail-key", () => {
    return getDetailsOfCustomer(id);
  });
  if (isLoading) {
    return <div>Loading...</div>;
  }

  const navbarContent = {
    person: "Customer",
  };

  return (
    <div>
      <Navbar navbarContent={navbarContent} />
      <CustomerDetails data={data} />
    </div>
  );
};

export default GetCustomerDetails;
