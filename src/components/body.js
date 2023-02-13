import { useNavigate } from "react-router-dom";
import Login from "./login";

// const formType = {
//   login: "Login",
//   signUpn: "Sign Up",
// };

const Body = (props) => {
  const navigate = useNavigate();
  const { person, addCustomer, customerList, getAllAccounts } =
    props.navbarContent;
  const handleSignUp = () => {
    navigate("/addCustomer");
  };
  const handleCustomerList = () => {
    navigate("/customerList");
  };
  const handleAllUserAccounts = () => {
    navigate("/getAllAccounts");
  };
  return (
    <>
      <div className="btn" back>
        <button
          className="btn info"
          onClick={() => {
            handleCustomerList();
          }}
        >
          {customerList}
        </button>
        <button className="btn success" onClick={() => handleSignUp()}>
          {addCustomer}
        </button>
        <button className="btn info" onClick={() => handleAllUserAccounts()}>
          {getAllAccounts}
        </button>
      </div>
      <div className="man-img">
        <img style={{ height: 700 }} src="./assets/images/man.png" alt="" />
      </div>
    </>
  );
};
export default Body;
