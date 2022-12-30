import React from 'react'
import { Navigate, useOutlet } from "react-router-dom";
import Sidebar from "../sidebar"
import { AuthProvider } from "../../hooks/useAuth";

const Index = () => {
  const outlet = useOutlet();
  const { user } = AuthProvider();

  if (!user) {
    return <Navigate to="/" />;
  }
  return (
    <main data-testid="Dashboard">
      <Sidebar />
      {outlet}
    </main>
  )
}

export default Index