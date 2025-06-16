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

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/main" element={<Main />} />
        <Route path="/createaccount" element={<CreateAccount />} />
        <Route path="/login" element={<Login />} />
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

        <Route path="/dashboard" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="/dashboard/mycase" element={<Mycase />} />
        </Route>
      </Routes>
    </Router>
  );
}
