import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import DeafultHOC from "./HOC/defaultHOC";
import Landing from "./Pages/Landing";
import Delivery from "./Pages/Delivery.js";
import Restaurant from "./Pages/RestuarantLanding";
import Profile from "./Pages/Profile";
import SignUpLogIn from "./Pages/SignUpLogIn";
import axios from "axios";

import { decodeToken } from "react-jwt";


function App() {

  const [user, setUser] = useState(false);
  useEffect(() => {
    const userJWTToken = localStorage.getItem("Logged-User-JWTTOKEN");
    if (userJWTToken === "") {
      const getUser = () => {
        fetch("http://localhost:5000/auth/login/success", {
          method: "GET",
          credentials: "include",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "Access-Control-Allow-Credentials": true
          }
        }).then((res) => {
          if (res.status === 200) {
            return res.json();
          }
          else {
            setUser(false);
          }
        }).then((resObj) => {
          setUser(resObj);
        }).catch((error) => {
          console.log(error);
        })
      }
      getUser();
    }
    else {
      const decodedToken__ = decodeToken(userJWTToken);
      console.log(decodedToken__);
      try {
        const RequestUserDetail = async () => {
          const RequestedUserDetail = await axios.get(`http://localhost:5000/user/${decodedToken__.user}`);
          console.log(RequestedUserDetail);
          setUser(RequestedUserDetail.data);
        }
        RequestUserDetail();
      } catch (error) {
        setUser(false);
      }
    }
  }, []);
  return (
    <>
      <Routes>
        <Route path="/" element={<DeafultHOC element={Landing} isLanding={true} UserDetails={user} />} />
        <Route path="/:section" element={<DeafultHOC element={Delivery} isDDN={true} UserDetails={user} />} />
        <Route path="/restaurant/:restaurantName" element={<DeafultHOC element={Restaurant} UserDetails={user} isLoggedIn={user ? true : false} />} />
        <Route path="/profile/:section" element={user ? <DeafultHOC element={Profile} UserDetails={user} /> : <Navigate to="/" />} />
        <Route path="/accounts/signup-login" element={user ? <Navigate to="/" /> : <SignUpLogIn />} />
      </Routes>
    </>
  );
}

export default App;
