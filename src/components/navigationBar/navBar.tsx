import React from "react";
import "../../styles/components/navBar.scss";
import Lendsqr from "../../assets/svg/lendsqr.svg";
import Bell from "../../assets/svg/bell.svg";
import Image from "../../assets/image 4.png";
import DropDown from "../../assets/svg/dropdown.svg";

import { AiOutlineSearch } from "react-icons/ai";

const navBar = () => {
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
                        <img src={DropDown} alt="dropDown"/>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </nav>
  );
};

export default navBar;
