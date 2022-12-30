import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  RouteProps,
  // RouteComponentProps
} from "react-router-dom";
import Login from "./pages/Login/index";
import Dashboard from "./component/Dashboard/Index";
import UserPage from "./pages/userPage/Index";
import UserDetails from "./pages/userDetails/Index";



const App = (): React.ReactElement => {
  return (
    <Router>
      <Routes >
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="users" element={<UserPage />} />
          <Route path=":userId" element={<UserDetails />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
