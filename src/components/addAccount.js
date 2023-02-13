import React from "react";
import { Field, Form, Formik, FormikProps } from "formik";
import { useNavigate, useParams } from "react-router-dom";
import { useAddAccount } from "../hooks/addAccount.hooks";
import Navbar from "./navbar";

const AddAccount = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const { mutate, data, isLoading, isError, isSuccess } = useAddAccount();

  const onsubmit = async (values) => {
    const account = {
      account: values,
    };

    mutate(account);
    navigate("/customerlist");
  };

  const navbarContent = {
    person: "Admin",
  };
  return (
    <>
      <Navbar navbarContent={navbarContent} />

      <h1>Transaction of User by Admin:</h1>

      <Formik
        initialValues={{
          account_type: "saving",
          total_balance: "",
          user_id: id,
          branch_id: 1,
        }}
        onSubmit={onsubmit}
      >
        {() => (
          <Form>
            <label>Account Type:</label>
            <Field as="select" name="account">
              <option value="saving" name="account_type" id="account">
                Saving
              </option>
            </Field>
            <label>Initial Balance:</label>
            <Field as="select" name="total_balance" id="total_balance">
              <option value="0">0</option>
              <option value="500">500</option>
              <option value="1000">1000</option>
            </Field>
            {/* <Field as="select" name="account">
            <option value="red">Red</option>
            <option value="green">Green</option>
            <option value="blue">Blue</option>
          </Field> */}
            <label>Branch Id:</label>
            <Field as="select" name="branch_id">
              <option value="1">1</option>
            </Field>
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default AddAccount;
