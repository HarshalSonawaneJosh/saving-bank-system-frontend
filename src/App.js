import Navbar from "./components/navbar";
import "./App.css";
import Login from "./components/login";
import AdminDashboard from "./components/adminDashboard";
import CustomerDashboard from "./components/customerDashboard";
import { Router, Routes, Route, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SignUp from "./components/addCustomer";
import CustomerList from "./components/customerList";
import AddAccount from "./components/addAccount";
import AddCustomer from "./components/addCustomer";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import CustomerDetails from "./components/customerComponents/showCustomerDetails";
import GetCustomerDetails from "./components/customerComponents/fetchCustomerDetails";
import CustomerBankDetails from "./components/customerComponents/customerBankDetails";
import GetAllTransactionOfUser from "./components/customerComponents/getAllTransactionOfUser";
import NewTransaction from "./components/customerComponents/newTransaction";
import FetchCustomerDetailsByAdmin from "./components/fetchCustomerDetailsByAdmin";
import GetAllAccounts from "./components/getAllAccounts";

function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/admin" element={<AdminDashboard />}></Route>
          <Route path="/addCustomer" element={<AddCustomer />}></Route>
          <Route path="/customerlist" element={<CustomerList />}></Route>
          <Route
            path="fetchCustomerDetailsByAdmin/:id"
            element={<FetchCustomerDetailsByAdmin />}
          ></Route>
          <Route path="/getAllAccounts" element={<GetAllAccounts />}></Route>
          <Route path="/addAccount/:id" element={<AddAccount />}></Route>
          <Route
            path="/customerDashboard/:id"
            element={<CustomerDashboard />}
          ></Route>
          <Route
            path="getCustomerDetails/:id"
            element={<GetCustomerDetails />}
          ></Route>
          <Route
            path="customerDetails/:id"
            element={<CustomerDetails />}
          ></Route>
          <Route
            path="customerBankDetails/:id"
            element={<CustomerBankDetails />}
          ></Route>
          <Route
            path="getAllTransactionsOfUser/:id"
            element={<GetAllTransactionOfUser />}
          ></Route>
          <Route path="newTransaction/:id" element={<NewTransaction />}></Route>
        </Routes>
        <ToastContainer />
        <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
      </QueryClientProvider>
    </>
  );
}

export default App;
