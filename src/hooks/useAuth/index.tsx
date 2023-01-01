import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "../useLocalStorage/index";
import axios from "axios";




export const AuthProvider = () => {
  const [user, setUser] = useLocalStorage("user", null);
  const [userDetails, setUserDetails] = useLocalStorage("userDetails", null);
  const navigate = useNavigate();

    // call this function when you want to store the user details in local storage
  const getUserDetails = async (id: any) => {
    try {
    const response = await axios.get(
        `https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${id}`
    );
    setUserDetails(response.data);
    } catch (err) {
    console.log(err)
    } 
};

  // call this function when you want to authenticate the user
  const login = async (data: any) => {
    setUser(data);
    navigate("/dashboard/users");
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
    userDetails,
    getUserDetails ,
    
  }

}