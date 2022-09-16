import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div
      style={{ height: "50px" }}
      className="col-lg-12 d-flex justify-content-center align-items-center text-secondary bg-dark"
    >
      © 2022 Copyright: Hamro Vaccine
    </div>
  );
};

export default Footer;
