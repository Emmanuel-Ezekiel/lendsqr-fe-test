import React from "react";
import logo from "./logo.svg";
import "./styles/App.scss";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // RouteComponentProps
} from "react-router-dom";
import Login from "./pages/Login/login";
import Dashboard from "./pages/Dashboard/dashboard";
import User from "./pages/user/user";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="users" element={<User />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
