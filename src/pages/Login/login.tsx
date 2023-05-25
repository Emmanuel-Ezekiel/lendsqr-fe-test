import React from "react";
import "../../styles/pages/login.scss";
import Lendsqr from "../../assets/svg/lendsqr.svg";
import Pablo from "../../assets/pablo-sign-in 1.png";
import ApiProvider from "../../utils/api/apiProvider";

const Login = () => {
  const [users, setUsers] = React.useState<{ email: string; password: any }>({
    email: "",
    password: "",
  });
  const [passwordShown, setPasswordShown] = React.useState<boolean>(false);

  const { login } = ApiProvider();

  //show password 
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    login(users);
  };

  return (
    <div className="Login">
      <div className="Login__Container">
        <div className="left">
          <div className="box">
            <img src={Lendsqr} alt="" className="logo" />

            <img src={Pablo} alt="" className="pablo" />
          </div>
        </div>

        <div className="right">
          <form onSubmit={handleSubmit}>
            <img src={Lendsqr} alt="" className="mobile-logo" />
            <div className="head">
              <h2>Welcome!</h2>
              <p>Enter details to login.</p>
            </div>

            <div className="form-container">
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  onChange={(e) =>
                    setUsers({ ...users, email: e.target.value })
                  }
                  value={users.email}
                />
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
                <a href="">Forgot PASSWORD?</a>
              </div>

              <button>LOG IN</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
