import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import Dashboard from "./components/dashboard/Dashboard";
import Navbar from "./components/layout/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import About from "./sections/About/About";
import Education from "./sections/Education/Education";
import Experience from "./sections/Experience/Experience";
import Projects from "./sections/Projects/Projects";
import Social from "./sections/Social/Social";
import Website from "./sections/Website/Website"

// v0
import Main0 from "./sections/Website/v0/Main"
import Education0 from "./sections/Website/v0/Education"
import Experience0 from "./sections/Website/v0/Experience"
import Project0 from "./sections/Website/v0/Projects"

function App() {
  return (
    <>
      <BrowserRouter>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss={false}
          draggable
          pauseOnHover={false}
        />
        <Navbar />
        <Switch>
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/about" component={About} />
          <Route exact path="/education" component={Education} />
          <Route exact path="/experience" component={Experience} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/social" component={Social} />
          <Route exact path="/website" component={Website} />

          <Route exact path="/v0" component={Main0} />
          <Route exact path="/v0/education" component={Education0} />
          <Route exact path="/v0/experience" component={Experience0} />
          <Route exact path="/v0/projects" component={Project0} />

          <Route exact path="/" component={Dashboard} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
