import axios from "axios";
import { useState } from "react";
import { useQuery } from "react-query";
import { Route, useNavigate } from "react-router-dom";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { getDetailsOfCustomer } from "../customerServices/customerServices";
import {
  useDeleteUser,
  useFetchAllCustomersInfo,
  useFetchCustomerByFirstName,
  useFetchSingleCustomerInfo,
} from "../hooks/addAccount.hooks";
import { useUpdateUser } from "../hooks/user.hooks";
import { fetchUsers } from "../services/addAccount.services";
import GetCustomerByFirstName from "./getCustomerByFirstName";
import Navbar from "./navbar";

const CustomerList = () => {
  const [first_name, setFirst_Name] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleModalToggle = () => setIsOpen((prev) => !prev);
  const navigate = useNavigate();
  const {
    isLoading: isUserLoading,
    data: userData,
    status,
    refetch: refetchUsers,
  } = useFetchAllCustomersInfo();

  const { data: findByName, refetch: findByFirstName } =
    useFetchCustomerByFirstName({ name: first_name });

  const { mutate: deleteUser } = useDeleteUser();
  const handleDeleteUser = (userId) => {
    deleteUser(userId, {
      onSuccess: () => refetchUsers(),
    });
  };

  const handleUpate = (userId) => {
    navigate(`/fetchCustomerDetailsByAdmin/${userId}`);
  };

  const handleTransactionInformation = (userId) => {
    navigate(`/getAllTransactionsOfUser/${userId}`);
  };

  const handleSeaarchByFirstName = () => {
    findByFirstName();
  };

  const handleDelete = (id) => {
    handleDeleteUser(id);
    handleModalToggle();
  };

  const tableRowData = !isUserLoading ? (
    userData?.map((user) => (
      <tr key={user.id}>
        {/* <h2>{user.first_name}</h2> */}
        <th scope="row">{user.id}</th>
        <td>{user.first_name}</td>
        <td>{user.last_name}</td>
        <td>{user.contact_no}</td>
        <td>{user.email}</td>
        <td>{user.address}</td>
        <td>{user.dob}</td>
        <td>{user.gender}</td>

        <td>
          <span
            className="material-symbols-outlined"
            onClick={() => handleUpate(user.id)}
          >
            Edit
          </span>
        </td>
        <td>
          <span
            className="material-symbols-outlined"
            onClick={handleModalToggle}
          >
            Delete
          </span>
        </td>
        <td>
          <span
            className="material-symbols-outlined"
            onClick={() => handleTransactionInformation(user.id)}
          >
            Info
          </span>
        </td>
        <Modal isOpen={isOpen} toggle={handleModalToggle}>
          <ModalHeader>Delete User</ModalHeader>
          <ModalBody>Are you sure you want to delete this user?</ModalBody>
          <ModalFooter>
            <Button
              className="btn btn-danger"
              onClick={() => handleDelete(user.id)}
            >
              Delete
            </Button>
            <Button onClick={handleModalToggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </tr>
    ))
  ) : (
    <>Loader....</>
  );

  console.log("tableRowData", tableRowData);

  const navbarContent = {
    person: "Admin",
  };

  return (
    <div>
      <Navbar navbarContent={navbarContent} />
      <div className="container mt-3">
        {/* Search customer in customer list. */}
        <button
          class="topnav-right"
          name="name"
          id="name"
          onClick={handleSeaarchByFirstName}
          value="first_name"
        >
          Search
        </button>

        <input
          class="topnav-right"
          type="search"
          onChange={(e) => setFirst_Name(e.target.value)}
        />
      </div>
      <div className="container mt-3">
        <div className="table-responsive">
          <table className="table table-bordered">
            <thead></thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Contact</th>
              <th scope="col">Email</th>
              <th scope="col">Address</th>
              <th scope="col">Date of Birth</th>
              <th scope="col">Gender</th>
              <th scope="col">Edit</th>
              <th scope="col">Delete</th>
              <th scope="col">Transaction</th>
            </tr>
            <tbody>{tableRowData}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CustomerList;
