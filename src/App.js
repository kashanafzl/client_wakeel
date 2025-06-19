import React from "react";
import Main from "./Main";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CreateAccount from "./Components/CreateAccount-to-sana/CreateAccount";
import Verification from "./Components/Verification/Verification";
import Profilestep1 from "./Components/Profilestep1/Profilestep1";
import Profilestep2 from "./Components/Profilestep2/Profilestep2";
import Login from "./Components/Login/Login";
import About from "./Components/Aboutus/About";
import Blog from "./Components/Blog/Blog";
import Layout from "./Components/layout/dashboard/Layout";
import Dashboard from "./Components/layout/dashboard/Dashboard";
import Mycase from "./Components/layout/Mycase/Mycase";
import Home from "./Components/LandingPage/Home";
import Lawyercreate from "./Components/Lawyer/Lawyercreateaccount/Lawyercreate";
import Lawyerlogin from "./Components/Lawyer/LawyerLogin/Lawyerlogin";
import Applycase from "./Components/Applytocase/Applycase";
import Lawyerdashboard from "./Components/Lawyerdashboard/Lawyerdashboard";
import LawyerLayout from "./Components/layout/Lawyerlayout/Lawyerlayout";
import Myprofile from "./Components/layout/MyProfile/Myprofile";
import Lawyerforgotpasswords from "./Components/Lawyer/Lawyerfotgot/Lawyerforgotpassword";
import Seelawyer from "./Components/layout/Lawyerlayout/Lawyercatergories/Seelawyer";
import LawyerProfile from "./Components/Lawyer/Lawyerprofile";
import ForgotPassword from "./Components/LandingPage/Forgotpassword/Forgotpassword";
import Lawyerpayment from "./Components/LawyerPayment/Lawyerpayment";
import LawyerCaseRecord from "./Components/Lawyer/Lawyercaserecord/Lawyercase";
import Lawyerprofilemy from "./Components/Lawyer/Lawyerprofilemy/Lawyerprofile";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/main" element={<Main />} />
        <Route path="/createaccount" element={<CreateAccount />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/verification" element={<Verification />} />
        <Route path="/profile" element={<Profilestep1 />} />
        <Route path="/profile2" element={<Profilestep2 />} />
        <Route path="/aboutus" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/applycase" element={<Applycase />} />

        {/* lawyer routes */}
        <Route path="/lawyercreateanaccount" element={<Lawyercreate />} />
        <Route path="/lawyerlogin" element={<Lawyerlogin />} />

        {/* lawyer routes */}

        <Route path="/lawyerdashboard" element={<Lawyerdashboard />} />
        <Route path="/Lawyerforgotpasswords" element={<Lawyerforgotpasswords />} />
         <Route path="/lawyerprofile/:id" element={<LawyerProfile />} />

        <Route path="/dashboard" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="/dashboard/mycase" element={<Mycase />} />
          <Route path="/dashboard/myprofile" element={<Myprofile />} />
          <Route path="/dashboard/seelawyer" element={<Seelawyer />} />
      
        </Route>

        <Route path="/lawyerdashboard" element={<LawyerLayout />}>
          <Route index element={<Lawyerdashboard />} />
          {/* Future nested routes like appointments or payments can go here */}
              <Route path="/lawyerdashboard/lawyerpayment" element={<Lawyerpayment />} />
          <Route path="/lawyerdashboard/lawyercase" element={<LawyerCaseRecord />} />
          <Route path="/lawyerdashboard/Lawyerprofilem" element={<Lawyerprofilemy />} />
        </Route>
      </Routes>
    </Router>
  );
}
