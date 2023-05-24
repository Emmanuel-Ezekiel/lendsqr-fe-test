import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "../localStorage/localStorage";

const ApiProvider = () => {
  const [users, setUsers] = useLocalStorage("users", null);
  const [userInfo, setUserInfo] = useLocalStorage("userInfo", null);
  const [userDetails, setUserDetails] = useLocalStorage("userDetails", null);
  const navigate = useNavigate();

  // call this function when you want to fetch user details with id
  const getUserDetailsById = async (id: any) => {
    try {
      const response = await axios.get(
        `https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${id}`
      );
      setUserDetails(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  // call this function to get all users
  const getAllUsers = async () => {
    try {
      const response = await axios.get(
        "https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users"
      );
      setUsers(response);
    } catch (err) {
      console.log(err);
    }
  };

  // call this function when you want to authenticate the user
  const login = async (data: any) => {
    setUserInfo(data);
    navigate("/dashboard/users");
  };

  // call this function to sign out logged in user
  const logout = () => {
    setUserInfo(null);
    navigate("/", { replace: true });
  };

  return {
    users,
    login,
    logout,
    getAllUsers,
    userDetails,
    userInfo,
    getUserDetailsById,
  };
};

export default ApiProvider;
