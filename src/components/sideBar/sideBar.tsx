import React from 'react'
import "../../styles/components/sideBar.scss";

import BriefCase from "../../assets/svg/briefcase 1.svg";
import down from "../../assets/svg/np_next.svg";
import Home from "../../assets/svg/home 1.svg";
import signOut from "../../assets/svg/sign-out 1.svg";
import ApiProvider from "../../utils/api/apiProvider";
// import {  AuthProvider  } from "../../hooks/useAuth"
import { Data, CUSTOMER_DATA, SETTINGS_DATA, BUSINESS_DATA } from "../../components/Data/Types"

const SideBar = () => {
      //logout Function
  const { logout } = ApiProvider();
  
  return (
    <aside>
    <div className="sidebar-container">
      <div className="header">
        <img src={BriefCase} alt="briefcase" />
        <span>Switch Organization</span>
        <img src={down} alt="down" />
      </div>

      <div className="dashboard">
        <img src={Home} alt="briefcase" />
        <span>Dashboard</span>
      </div>

      <ul>
        <p>CUSTOMERS</p>
        {CUSTOMER_DATA.map(({id, name , image}: Data) => (
            <li key={id}>
              <img src={image} alt="" />
              <span>{name}</span>
            </li>
        ))}
        <p>BUSINESSES</p>
        {BUSINESS_DATA.map(({id, name , image}: Data) => (
            <li key={id}>
              <img src={image} alt="" />
              <span>{name}</span>
            </li>
        ))}
        <p>SETTINGS</p>
        {SETTINGS_DATA.map(({id, name , image}: Data) => (
            <li key={id}>
              <img src={image} alt="" />
              <span>{name}</span>
            </li>
        ))}
      </ul>
      <hr />

      <div className="log-container" onClick={logout}>
        <img src={signOut} alt="briefcase" />
        <span>Logout</span>
      </div>

      <div className="vtn">
         <span>v1.2.0</span>
      </div>
    </div>
  </aside>
  )
}

export default SideBar;
