import React from "react";
import "../../styles/components/navBar.scss";
import Lendsqr from "../../assets/svg/lendsqr.svg";
import Bell from "../../assets/svg/bell.svg";
import Image from "../../assets/image 4.png";
import DropDown from "../../assets/svg/dropdown.svg";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { MdCancel } from "react-icons/md";
import { AiOutlineSearch } from "react-icons/ai";
import {
  Data,
  CUSTOMER_DATA,
  SETTINGS_DATA,
  BUSINESS_DATA,
} from "../../components/Data/Types";
import BriefCase from "../../assets/svg/briefcase 1.svg";
import down from "../../assets/svg/np_next.svg";
import Home from "../../assets/svg/home 1.svg";
import signOut from "../../assets/svg/sign-out 1.svg";
import ApiProvider from "../../utils/api/apiProvider";

const NavBar = () => {
  const [sidebarOpen, setSidebarOpen] = React.useState<boolean>(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const { logout } = ApiProvider();

  return (
    <nav>
      <div className="nav-container">
        <div className="left">
          <img src={Lendsqr} alt="lendsqr" />
          <div className="search-container">
            <input type="text" placeholder="Search for anything" />
            <div className="searchIcon">
              <AiOutlineSearch color="#ffffff" height={14} width={13.97} />
            </div>
          </div>
        </div>
        <div className="right">
          <p>Docs</p>
          <div className="userInfo">
            <img src={Bell} alt="bell" />
            <div className="box">
              <img src={Image} alt="pics" />
              <div className="name">
                <p>Adedeji</p>
                <img src={DropDown} alt="dropDown" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mob-nav">
        <div className="logo">
          <img src={Lendsqr} alt="logo" />
        </div>
        <HiOutlineMenuAlt3 className="humbuger" onClick={toggleSidebar} />
      </div>
      <div
        className={`navbar__sidebar ${
          sidebarOpen ? "navbar__sidebar--open" : ""
        }`}
      >
        <div className="navbar__sidebar-header">
          <div className="navbar__sidebar-close" onClick={toggleSidebar}>
            <MdCancel className="navbar__sidebar-close" />
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
          {CUSTOMER_DATA.map(({ id, name, image }: Data) => (
            <li key={id}>
              <img src={image} alt="" />
              <span>{name}</span>
            </li>
          ))}
          <p>BUSINESSES</p>
          {BUSINESS_DATA.map(({ id, name, image }: Data) => (
            <li key={id}>
              <img src={image} alt="" />
              <span>{name}</span>
            </li>
          ))}
          <p>SETTINGS</p>
          {SETTINGS_DATA.map(({ id, name, image }: Data) => (
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

export default NavBar;
