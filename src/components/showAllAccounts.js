import React from "react";

const ShowAllAccounts = (props) => {
  const user = props.data;

  const tableRowData = user?.map((user) => (
    <tr key={user.id}>
      <th scope="row">{user.id}</th>
      <th scope="row">{user.account_no}</th>
      <td>{user.account_type}</td>
      <td>{user.total_balance}</td>
    </tr>
  ));

  return (
    <div>
      <table className="table">
        <thead className="thead-dark"></thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Account Number</th>
          <th scope="col">Account Type</th>
          <th scope="col">Total Balance</th>
        </tr>
        <tbody>{tableRowData}</tbody>
      </table>
    </div>
  );
};

export default ShowAllAccounts;
