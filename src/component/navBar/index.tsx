import React from "react";
import "../../styles/component/navbar.scss";
import Lendsqr from "../../assets/lendsqr.svg";
import Notify from "../../assets/np_notification.svg"
import Profile from "../../assets/image 4.svg"
import dropDown from "../../assets/np_dropdown.svg"
import { AiOutlineSearch } from "react-icons/ai";

const Index = () => {
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
          <img src={Notify} alt="image"  className="notify"/>
          <div className="profile-img">
            <img src={Profile} alt="image" />
          </div>
          <h2>Adedeji</h2>
          <div className="dropdown">
             <img src={dropDown} alt="image" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Index;
