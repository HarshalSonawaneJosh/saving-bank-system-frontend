import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getAccountDetailsOfUser } from "../../customerServices/customerServices";
import Navbar from "../navbar";
import NewTransaction from "./newTransaction";

const CustomerBankDetails = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useQuery("accountDetail-key", () => {
    return getAccountDetailsOfUser(id);
  });

  if (isLoading) {
    return <div>Loading....</div>;
  }
  console.log("user account details", data);
  console.log("user account id=======>", data.id);

  const navbarContent = {
    person: "Customer",
  };

  return (
    <div>
      <Navbar navbarContent={navbarContent} />
      <div className="create">
        <h2>User Details</h2>
        <form>
          <label>Account Number:</label>
          <input value={data.account_no} name="account_no" id="account_no" />
          <label>Account Type:</label>
          <input
            value={data.account_type}
            name="account_type"
            id="account_type"
          />
          <label>Total Balance:</label>
          <input
            value={data.total_balance}
            name="total_balance"
            id="total_balance"
          />
        </form>
      </div>
    </div>
  );
};

export default CustomerBankDetails;
