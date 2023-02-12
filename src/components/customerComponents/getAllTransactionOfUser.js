import { FieldArray, Formik } from "formik";
import React from "react";
import { useQuery } from "react-query";
import { Form, useParams } from "react-router-dom";
import { Input } from "reactstrap";
import { getAllTransactionsOfUser } from "../../customerServices/customerServices";

const GetAllTransactionOfUser = () => {
  const { id } = useParams();

  const { data, isLoading, error } = useQuery("transaction-details", () => {
    return getAllTransactionsOfUser(id);
  });

  if (isLoading) {
    return <div>Loading....</div>;
  }

  const result = data.map((data) => (
    <tr>
      <th scope="row"> {data.id}</th>
      <td>{data.details}</td>
      <td>{data.transaction_type}</td>
      <td>{data.amount}</td>
      <td>{data.balance}</td>
      <td>{new Date(data.created_at).toDateString()}</td>
    </tr>
  ));

  return (
    <div>
      <table className="table">
        <thead className="thead-dark"></thead>
        <tr>
          <th scope="col">Transaction Id</th>
          <th scope="col">Mode</th>
          <th scope="col">Transaction Type</th>
          <th scope="col">Amount</th>
          <th scope="col">Balance</th>
          <th scope="col">Created At</th>
        </tr>
        <tbody>{result}</tbody>
      </table>
    </div>
  );
};

export default GetAllTransactionOfUser;