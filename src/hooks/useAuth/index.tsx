import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "../useLocalStorage/index";



export const AuthProvider = () => {
  const [user, setUser] = useLocalStorage("user", null);
  const navigate = useNavigate();

  // call this function when you want to authenticate the user
  const login = async (data: any) => {
    setUser(data);
    navigate("/dashboard");
  };

  // call this function to sign out logged in user
  const logout = () => {
    setUser(null);
    navigate("/", { replace: true });
  };

  return {
    user,
    login,
    logout,
  }

}