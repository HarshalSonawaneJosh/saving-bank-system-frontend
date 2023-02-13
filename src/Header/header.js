import React from "react";
import { Link } from "react-router-dom";
import Bank from "./Bank.svg";
import "./headerStyle.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <a href="https://www.google.com/search?q=bank&oq=bank&aqs=chrome..69i57j69i59l2j46i131i199i433i465i512l2j69i60l3.10465j0j9&sourceid=chrome&ie=UTF-8">
          <img src={Bank} alt="Bank" />
        </a>
        &nbsp;&nbsp;&nbsp;
        <Link to="/" className="logo">
          Bankwise
        </Link>
      </div>
      <div className="header-right">
        <Link className="header-link">Accounts</Link>
        <Link className="header-link">Transactions</Link>
        <Link className="header-link">Settings</Link>
      </div>
    </header>
  );
};

export default Header;
