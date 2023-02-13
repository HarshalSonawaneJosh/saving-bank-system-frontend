import React, { useState } from "react";
import { useMutation, useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import { getAccountDetailsOfUser } from "../../customerServices/customerServices";
import { useMakeTransaction } from "../../hooks/user.hooks";
import Navbar from "../navbar";

const NewTransaction = (props) => {
  const navigate = useNavigate();
  const customer_id = props.user_AccountId;
  const { id } = useParams();
  const [details, setDetails] = useState("Netbanking");
  const [transaction_type, setTransaction_Type] = useState("");
  const [amount, setAmount] = useState();

  const { data, isLoading, error } = useQuery("accountDetail-key", () => {
    return getAccountDetailsOfUser(id);
  });

  //   console.log("account id in  new Transaction ", data);

  const { mutate: makeTransaction } = useMakeTransaction();

  const handleTransation = async (e) => {
    e.preventDefault();
    const transaction = {
      transaction: {
        details,
        transaction_type,
        amount,
        account_id: data.id, //getting account id from account details for post call.
      },
    };

    makeTransaction(transaction);
    navigate(`/customerDashboard/${id}`);
  };

  const navbarContent = {
    person: "Customer",
  };

  return (
    <div>
      <Navbar navbarContent={navbarContent} />
      <div>
        <div className="create">
          <h2>User Details</h2>
          <form>
            <label>Transaction Mode:</label>
            <input
              value={details}
              name="details"
              id="details"
              onChange={(e) => setDetails(e.target.value)}
              disabled
            />

            <label>Transactyion Type:</label>
            <select
              value={transaction_type}
              name="transaction_type"
              id="transaction_type"
              onChange={(e) => setTransaction_Type(e.target.value)}
            >
              <option value="">Select option</option>
              <option value="credit">Credit</option>
              <option value="debit">Debit</option>
            </select>
            <label>Amount:</label>
            <input
              type="number"
              placeholder="Enter more than 0"
              value={amount}
              name="amount"
              id="amount"
              valueAsNumber="true"
              onChange={(e) => setAmount(e.target.value)}
              required
            />

            <button
              onClick={(e) => {
                handleTransation(e);
              }}
            >
              Create Transaction
            </button>
            {/* {isLoading && <button disabled>Updating Details...</button>} */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewTransaction;
