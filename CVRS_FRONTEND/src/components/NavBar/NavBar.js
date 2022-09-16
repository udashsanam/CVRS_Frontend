import React, { useEffect, useState } from "react";
import { NavLink, useHistory, useLocation } from "react-router-dom";
import { BsPersonCircle } from "react-icons/bs";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { AiOutlineSearch } from "react-icons/ai";
import HamroVaccine from "../../assets/images/logo/HamroVaccine-logos_transparent1.png";
import "./NavBar.css";
import { useDispatch } from "react-redux";
import { authActions } from "../../store/auth-slice";
import { Box, Button, TextField } from "@mui/material";
import { useStyles } from "../useStyles";

function NavBar({ setPathName }) {
  const classes = useStyles();
  const location = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();
  const [path, setPath] = useState(location.pathname);
  const [citizenId, setCitizenId] = useState("");
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  useEffect(() => {
    setPath(location.pathname);
    setPathName(path);
  }, [setPathName, location, path]);

  const logoutHandler = (event) => {
    event.preventDefault();
    dispatch(authActions.logout());
    history.replace("/");
  };

  const searchHandler = () => {
    history.push("/citizen/" + citizenId);
  };
  return (
    <>
      <Box
        elevation={3}
        className={`d-flex align-items-center justify-content-center ${classes.navbar}`}
      >
        <ul className="row align-items-center w-25 m-0">
          <li className="col-lg-4 col-md-4">
            <NavLink to="/">
              <img
                src={HamroVaccine}
                style={{ width: "75%", objectFit: "cover" }}
                alt=""
                className="m-0"
              />
            </NavLink>
          </li>
          {isLoggedIn && (
            <li className="col-lg-4 col-md-4 d-flex justify-content-center">
              <NavLink to="/admin/citizen" activeClassName="selected">
                <Button variant="contained">Dashboard</Button>
              </NavLink>
            </li>
          )}
        </ul>
        <ul
          className="row align-items-center m-0 justify-content-center"
          style={{ width: "40%" }}
        >
          <li className="col-lg-2 col-md-2">
            <NavLink
              to="/home"
              className="d-flex align-items-center justify-content-center"
              activeClassName="selected"
            >
              <Button size="large" className={`px-0 ${classes.navHeading}`}>
                Home
              </Button>
            </NavLink>
          </li>
          <li className="col-lg-2 col-md-2">
            <NavLink
              to="/about"
              className="d-flex align-items-center justify-content-center"
              activeClassName="selected"
            >
              <Button size="large" className={classes.navHeading}>
                About
              </Button>
            </NavLink>
          </li>
          <li className="col-lg-2 col-md-2">
            <NavLink
              to="/contact"
              className="d-flex align-items-center justify-content-center"
              activeClassName="selected"
            >
              <Button size="large" className={classes.navHeading}>
                Contact
              </Button>
            </NavLink>
          </li>
        </ul>

        <ul className="row align-items-center m-0" style={{ width: "35%" }}>
          <li className="col-lg-6 p-0" style={{ position: "" }}>
            <TextField
              id="standard-basic"
              label="Registration No."
              variant="standard"
              type="number"
              className="pb-2"
              onChange={(event) => setCitizenId(event.target.value)}
            />
            <AiOutlineSearch
              className=" pl-0"
              style={{
                position: "absolute",
                top: "20",
                left: "135",
                width: "100px",
                height: "25px",
              }}
              onClick={searchHandler}
            />
          </li>

          <li className="col-lg-4">
            <NavLink to="/register" activeClassName="selected">
              <Button size="large" variant="contained">
                Register
              </Button>
            </NavLink>
          </li>
          <li className="col-lg-2 d-flex">
            {!isLoggedIn ? (
              <NavLink
                to="/login"
                className="button d-flex align-items-center "
                style={{
                  background: "#3d3f42",
                  color: "white",
                }}
                activeClassName="selected"
              >
                <BsPersonCircle style={{ width: "25px", height: "25px" }} />
              </NavLink>
            ) : (
              <div
                className="button  d-flex align-items-center "
                style={{
                  background: "#3d3f42",
                  color: "white",
                }}
              >
                <RiLogoutBoxRLine
                  onClick={logoutHandler}
                  style={{ width: "25px", height: "25px" }}
                />
              </div>
            )}
          </li>
        </ul>
      </Box>
    </>
  );
}

export default NavBar;
