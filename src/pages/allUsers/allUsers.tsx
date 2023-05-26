import React from "react";
import "../../styles/pages/allusers.scss";
import ApiProvider from "../../utils/api/apiProvider";
import Widget from "../../components/widgets/widget";
import { WIDGET_DATA } from "../../components/Data/Types";
// import Table from "../../components/table/table"

const User = () => {
  const { getAllUsers } = ApiProvider();

  React.useEffect(() => {
    getAllUsers();
  }, []);

  //get all users Data from LocalStorage
  const value: any = window.localStorage.getItem("users");
  const allUsers = JSON.parse(value);

  return (
    <div className="users-container">
      <h2>Users</h2>

      <div className="widget">
        <Widget data={[WIDGET_DATA[0]]} />
        <Widget data={[WIDGET_DATA[1]]} />
        <Widget data={[WIDGET_DATA[2]]} />
        <Widget data={[WIDGET_DATA[3]]} />
      </div>

      {/* <Table/> */}
    </div>
  );
};

export default User;
