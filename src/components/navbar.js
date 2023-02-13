import axios from "axios";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { getToken } from "../hooks/useToken";

const Navbar = (props) => {
  const navigate = useNavigate();

  const onSuccess = (values) => {
    console.log("Success...", values);
    localStorage.clear();
    navigate("/");
  };
  const onError = () => {
    console.log("Loading...");
  };

  // const adminLogoutResetToken = useMutation(() => {});
  // console.log("token===>", token);

  const deleteEventToken = () => {
    return axios.delete("http://localhost:3000/logout", {
      headers: { Authorization: getToken() },
    });
    // console.log(token);
  };

  const { mutate } = useMutation(deleteEventToken, { onSuccess, onError });

  // localStorage.removeItem(token);

  const { person } = props.navbarContent;

  const handleLogout = () => {
    mutate();
    navigate("/admin");
  };

  return (
    <>
      <div className="topnav">
        <a className="active" href="#home">
          {person}
        </a>
        <a onClick={handleLogout}>Logout</a>
      </div>
    </>
  );
};

export default Navbar;
