import React, { useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import VaccineRegistration from "../Forms/DifferntForms/VaccineRegistration";
import NavBar from "../NavBar/NavBar";
import Home from "../HomePage/Home";
import Vaccine from "../Forms/DifferntForms/Vaccine";
import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp";
import CitizenDetails from "../Admin/CitizenDetails";
import SideNavBar from "../SideNavBar/SideNavBar";
import VaccineDetails from "../Admin/VaccineDetails";
import EditProfile from "../Admin/EditProfile";
import RegistrationCompleted from "../RegistrationCompleted";
import Footer from "../Footer/Footer";
import VaccineResult from "../VaccineResult/VaccineResult";
import About from "../About/About";
import Contact from "../Contact/Contact";
function Routing() {
  const [pathName, setPathName] = useState(window.location.pathname);
  console.log(pathName, "routing pathname");
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  console.log(isLoggedIn, "isLoggedIn");

  return (
    <div>
      <NavBar setPathName={setPathName} />
      {pathName.includes("/admin") && (
        <div className="d-flex bg">
          {isLoggedIn && (
            <>
              <SideNavBar setPathName={setPathName} />
              <div className="w-100">
                <Switch>
                  <Route path="/admin/vaccine-form" component={Vaccine} />
                  <Route path="/admin/citizen" component={CitizenDetails} />
                  <Route path="/admin/vaccine" component={VaccineDetails} />
                  <Route path="/admin/edit" component={EditProfile} />
                  <Route path="/admin/sign-up" component={SignUp} />
                </Switch>
              </div>
            </>
          )}
        </div>
      )}
      <Switch>
        <Route exact path="/login" component={Login} />
        <div className="bg">
          <Route path="/citizen/:regId" component={VaccineResult} />
          <Route exact path="/register" component={VaccineRegistration} />
          <Route
            exact
            path="/register/success"
            component={RegistrationCompleted}
          />
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/home">
            <Redirect to="/" />
          </Route>
        </div>
      </Switch>
      <Footer />
    </div>
  );
}

export default Routing;
