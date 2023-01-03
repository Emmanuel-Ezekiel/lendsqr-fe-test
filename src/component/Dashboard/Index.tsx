import React from "react";
import { Navigate, useOutlet } from "react-router-dom";
import Sidebar from "../sidebar";
import Navbar from "../navBar";
import { AuthProvider } from "../../hooks/useAuth";
import "../../styles/component/dashboard.scss";

const Index = () => {
  const outlet = useOutlet();
  const { user } = AuthProvider();

  if (!user) {
    return <Navigate to="/" />;
  }

  return (
    <div data-testid="dashboard-page" className="dash-container">
      <Navbar />
      <main>
        <Sidebar />
        {outlet}
      </main>
    </div>
  );
};

export default Index;
