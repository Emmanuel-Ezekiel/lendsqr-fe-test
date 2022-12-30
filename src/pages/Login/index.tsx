import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/pages/login.scss";
import Lendsqr from "../../assets/lendsqr.svg";
import Pablo from "../../assets/pablo-sign-in 1.svg";
import { AuthProvider} from "../../hooks/useAuth";

const Index = () => {
  const [users, setUsers] = useState<{ email: string; password: any }>({
    email: "",
    password: "",
  });

  const { login } = AuthProvider();

  const [passwordShown, setPasswordShown] = useState<boolean>(false);
  const navigate = useNavigate();

  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    login(users)
    // navigate("/dashboard");
  };

  return (
    <>
      <div className="login">
        <div className="loginContainer">
          <div className="login-left">
            <div className="logo">
              <img src={Lendsqr} alt="" />
            </div>
            <div className="pablo-img">
              <img src={Pablo} alt="" />
            </div>
          </div>

          <div className="Form-container">

          <div className="logo">
              <img src={Lendsqr} alt="" />
            </div>

            <div className="form-content">
              <h2>Welcome!</h2>
              <p>Enter details to login.</p>

              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Email"
                    data-testid="email"
                    onChange={(e) =>
                      setUsers({ ...users, email: e.target.value })
                    }
                    value={users.email}
                  />
                </div>
                <div className="form-group">
                  <input
                    type={passwordShown ? "text" : "password"}
                    name="password"
                    id="password"
                    placeholder="Password"
                    data-testid="password"
                    onChange={(e) =>
                      setUsers({ ...users, password: e.target.value })
                    }
                    value={users.password}
                  />
                  <span onClick={togglePasswordVisiblity}>show</span>
                </div>
                <p>forgot password?</p>
                <button className="btn">
                    LOG IN
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
