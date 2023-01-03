import React from "react";
import "../../styles/component/navbar.scss";
import Lendsqr from "../../assets/lendsqr.svg";
import Notify from "../../assets/np_notification.svg";
import Profile from "../../assets/image 4.svg";
import dropDown from "../../assets/np_dropdown.svg";
import BriefCase from "../../assets/svg/briefcase 1.svg";
import down from "../../assets/svg/np_next.svg";
import Home from "../../assets/svg/home 1.svg";
import { Data, CUSTOMER_DATA, SETTINGS_DATA, BUSINESS_DATA } from "../../component/Data/Types"
import { AiOutlineSearch } from "react-icons/ai";
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import { MdCancel } from 'react-icons/md';
import signOut from "../../assets/svg/sign-out 1.svg";
import {  AuthProvider  } from "../../hooks/useAuth"

const Index = () => {
  const [sidebarOpen, setSidebarOpen] = React.useState<boolean>(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const { logout } =   AuthProvider()

  return (
    <nav>
      <div className="nav-container">
        <div className="logo">
          <img src={Lendsqr} alt="logo" />
        </div>
        <div className="search-container">
          <input type="text" placeholder="Search for something" />
          <div className="searchIcon">
            <AiOutlineSearch color="#ffffff" height={14} width={13.97} />
          </div>
        </div>
        <div className="nav-left">
          <p>Docs</p>
          <img src={Notify} alt="image" className="notify" />
          <div className="profile-img">
            <img src={Profile} alt="image" />
          </div>
          <h2>Adedeji</h2>
          <div className="dropdown">
            <img src={dropDown} alt="image" />
          </div>
        </div>
      </div>

      <div className="mob-nav">
        <div className="logo">
          <img src={Lendsqr} alt="logo" />  
        </div>
         <HiOutlineMenuAlt3 className="humbuger" onClick={toggleSidebar}/>
      </div>
      <div className={`navbar__sidebar ${sidebarOpen ? 'navbar__sidebar--open' : ''}`}>
        <div className="navbar__sidebar-header">
          <div className="navbar__sidebar-close" onClick={toggleSidebar}>
            <MdCancel className="navbar__sidebar-close"/>
          </div>
        </div>
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
    </nav>
  );
};

export default Index;
