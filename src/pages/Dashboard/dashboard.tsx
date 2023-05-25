import React from "react";
import Sidebar from "../../components/sideBar/sideBar";
import NavBar from "../../components/navigationBar/navBar";
import { Navigate, useOutlet } from "react-router-dom";
import "../../styles/pages/dashboard.scss";

const Dashboard = () => {
  const outlet = useOutlet();

  return (
    <div className="dash-container">
      <NavBar />
      <main>
        {/* <Sidebar /> */}
        {outlet}
      </main>
    </div>
  );
};

export default Dashboard;
