import React, { useState } from "react";
import { useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import { getDetailsOfCustomer } from "../../customerServices/customerServices";
import { useEffect } from "react";
import { useUpdateUser } from "../../hooks/user.hooks";

const CustomerDetails = (props) => {
  const navigate = useNavigate();
  const data = props.data;
  const id = props.data.id;

  const [first_name, setFirst_Name] = useState(data?.first_name);
  console.log("firstdddname", data?.first_name);
  const [last_name, setLast_Name] = useState(data?.last_name);
  const [dob, setDob] = useState(data?.dob); //new
  const [gender, setGender] = useState(data?.gender);
  const [email, setEmail] = useState(data?.email);
  const [contact_no, setContact_No] = useState(data?.contact_no);
  const [address, setAddress] = useState(data?.address);

  useEffect(() => {
    if (data !== null) {
      setFirst_Name(data.first_name);
      setLast_Name(data.last_name);
      setDob(data.dob);
      setGender(data.gender);
      setEmail(data.email);
      setContact_No(data.contact_no);
      setAddress(data.address);
    }
  }, [data]);

  const { mutate: updateUser } = useUpdateUser();

  const handleEdit = async (e) => {
    e.preventDefault();
    const users = {
      user: {
        first_name,
        last_name,
        dob,
        gender,
        contact_no,
        address,
        id,
      },
    };

    updateUser(users);

    // navigate(`/customerDashboard/${id}`);  //need to create same page coz landing page will not working properly when we edit customer details by admin it redirect to custmr dashboard page.
  };

  return (
    <div>
      <div className="create">
        <h2>User Details</h2>
        <form>
          <label>First Name:</label>
          <input
            type="text"
            value={first_name}
            name="first_name"
            id="first_name"
            onChange={(e) => setFirst_Name(e.target.value)}
            required
          />
          <label>Last Name:</label>
          <input
            type="text"
            required
            value={last_name}
            name="last_name"
            id="last_name"
            onChange={(e) => setLast_Name(e.target.value)}
          ></input>
          <label>Date of Birth:</label> {/* New */}
          <input
            type="date"
            value={dob}
            name="dob"
            id="dob"
            onChange={(e) => setDob(e.target.value)}
            required
          />
          <label>Gender:</label>
          <select
            value={gender}
            name="gender"
            id="gender"
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="">Select a Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            name="gender"
            id="gender"
            onChange={(e) => setEmail(e.target.value)}
            disabled
          />
          <label>Contact:</label>
          <input
            type="number"
            value={contact_no}
            name="contact_no"
            id="contact_no"
            onChange={(e) => setContact_No(e.target.value)}
            required
          />
          <label>Address:</label>
          <input
            type="text"
            value={address}
            name="address"
            id="addresss"
            onChange={(e) => setAddress(e.target.value)}
            required
          />
          <button
            onClick={(e) => {
              handleEdit(e);
            }}
          >
            Update Details
          </button>
          {/* {isLoading && <button disabled>Updating Details...</button>} */}
        </form>
      </div>
    </div>
  );
};

export default CustomerDetails;
