import React, { useContext, useState } from "react";
import "../../styles/pages/allusers.scss";
import ApiProvider from "../../utils/api/apiProvider";
import Widget from "../../components/widgets/widget";
import { WIDGET_DATA } from "../../components/Data/Types";
import Table from "../../components/table/index";
import Back from "../../assets/svg/np_back.svg";
import Avatar from "../../assets/svg/avatar.svg";
import Star1 from "../../assets/svg/np_star_1.svg";
import Star2 from "../../assets/svg/np_star_2.svg";
import { UserContext } from "../../utils/contextApi";
import { Pagination } from "antd";

//get all users Data from LocalStorage
const value: any = window.localStorage.getItem("users");
const allUsers = JSON.parse(value);

// get useerDetails Data from localStorage
const value2: any = window.localStorage.getItem("userDetails");
const userDetails = [JSON.parse(value2)];

const User = () => {
  const { getAllUsers } = ApiProvider();
  const [openAllUsers, setOpenAllUsers] = React.useState<boolean>(true);
  const [openUserDetails, setOpenUserDetails] = React.useState<boolean>(false);
  const [activeTab, setActiveTab] = React.useState(0);
  const { userStatus, userId } = useContext(UserContext);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const combinedArray = allUsers?.map((obj: any, index: any): any => ({
    ...obj,
    status: userStatus,
  }));

  const [array, setCombinedArray] = useState(combinedArray);

  //toggle Tabs
  const handleTabClick = (index: any) => {
    setActiveTab(index);
  };

  //activate User
  const handleActivate = () => {
    const updatedArray = combinedArray.map((obj: any) => {
      if (obj.id === userId) {
        return { ...obj, status: "active" };
      }
      return obj;
    });
    setCombinedArray(updatedArray);
  };

  //Black list
  const handleBlacklist = () => {
    const updatedArray = combinedArray.map((obj: any) => {
      if (obj.id === userId) {
        return { ...obj, status: "blacklisted" };
      }
      return obj;
    });
    setCombinedArray(updatedArray);
  };

  React.useEffect(() => {
    //Fetching allUsers data
    getAllUsers();
  }, []);

  //open UserDetails Route
  const handleRoute = () => {
    setOpenAllUsers(true);
    setOpenUserDetails(false);
  };

  const [currentPage, setCurrentPage] = useState(1);
  // const itemsPerPage = 9;
  const totalItems = 100;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = array?.slice(indexOfFirstItem, indexOfLastItem);
  const startIndex = (currentPage - 1) * itemsPerPage;


  const totalPages = Math.ceil(allUsers?.length / itemsPerPage);

  const handlePageChange = (pageNumber: any) => {
    setCurrentPage(pageNumber);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handleItemsPerPageChange = (event: any) => {
    const { value } = event.target;
    setItemsPerPage(Number(value));
    setCurrentPage(1); // Reset current page when changing items per page
  };

  const renderPageOptions = () => {
    const options = [10, 20, 50, 75, 100]; // Customize the available options as per your needs

    return options.map((option) => (
      <option key={option} value={option}>
        {option}
      </option>
    ));
  };

  return (
    <>
      {openAllUsers && (
        <div className="users-container">
          <h2>Users</h2>
          <div className="widget">
            <Widget data={[WIDGET_DATA[0]]} />
            <Widget data={[WIDGET_DATA[1]]} />
            <Widget data={[WIDGET_DATA[2]]} />
            <Widget data={[WIDGET_DATA[3]]} />
          </div>

          <Table
            allUsers={currentItems}
            setOpenAllUsers={setOpenAllUsers}
            setOpenUserDetails={setOpenUserDetails}
            setCombinedArray={setCombinedArray}
          />

          <div className="bottom">
            <div className="page">
              Showing{" "}
              <select value={itemsPerPage} onChange={handleItemsPerPageChange}>
                {renderPageOptions()}
              </select>{" "}
              out of {totalItems}
            </div>
            <div className="pagination">
              <button
                disabled={currentPage === 1}
                onClick={handlePrevPage}
                className="btn"
              >
                &lt;
              </button>
              {Array.from(
                { length: totalPages },
                (_: any, index: any) => index + 1
              ).map((pageNumber: any) => (
                <button
                  key={pageNumber}
                  onClick={() => handlePageChange(pageNumber)}
                  className={pageNumber === currentPage ? "active" : ""}
                >
                  {pageNumber}
                </button>
              ))}
              <button
                disabled={currentPage === totalPages}
                onClick={handleNextPage}
                className="btn"
              >
                &gt;
              </button>
            </div>
          </div>
        </div>
      )}

      {openUserDetails && (
        <div className="userDetails">
          <div className="container">
            <div className="backBtn" onClick={handleRoute}>
              <img src={Back} alt="" />
              <span>Back to Users</span>
            </div>
            <div className="user-status">
              <h2>User Details</h2>

              <div className="btns">
                <button className="btn1" onClick={handleBlacklist}>
                  Blacklist User
                </button>
                <button className="btn2" onClick={handleActivate}>
                  Activate User
                </button>
              </div>
            </div>
            <div className="board">
              {userDetails?.map((detail?: any) => (
                <div className="basic-info">
                  <div className="profile-image">
                    {detail?.profile.avatar ? (
                      <img src={detail?.profile.avatar} alt="" />
                    ) : (
                      <img src={Avatar} alt="" />
                    )}
                  </div>
                  <div className="group">
                    <div className="name">
                      <h2>
                        {detail?.profile.firstName} {detail?.profile.lastName}
                      </h2>
                      <p>{detail?.profile.bvn}</p>
                    </div>
                    <hr />
                    <div className="tier">
                      <h2>User'sTier</h2>
                      <span>
                        <img src={Star1} alt="" />
                        <img src={Star2} alt="" />
                        <img src={Star2} alt="" />
                      </span>
                    </div>
                    <hr />
                    <div className="money">
                      <h2>
                        <span>&#8358;</span>
                        {detail?.accountBalance}
                      </h2>
                      <p>{detail?.accountNumber}/ProvidusBank</p>
                    </div>
                  </div>
                </div>
              ))}
              {/* <Tabs defaultActiveKey="1" items={items} onChange={onChange} /> */}
              <div className="tabs">
                <span
                  className={activeTab === 0 ? "active" : ""}
                  onClick={() => handleTabClick(0)}
                >
                  General Details
                </span>
                <span
                  className={activeTab === 1 ? "active" : ""}
                  onClick={() => handleTabClick(1)}
                >
                  Documents
                </span>
                <span
                  className={activeTab === 2 ? "active" : ""}
                  onClick={() => handleTabClick(2)}
                >
                  Bank Details
                </span>
                <span
                  className={activeTab === 3 ? "active" : ""}
                  onClick={() => handleTabClick(3)}
                >
                  Loans
                </span>
                <span
                  className={activeTab === 4 ? "active" : ""}
                  onClick={() => handleTabClick(4)}
                >
                  Savings
                </span>

                <span
                  className={activeTab === 5 ? "active" : ""}
                  onClick={() => handleTabClick(5)}
                >
                  App and System
                </span>
              </div>
            </div>
            <div className="board2">
              <div className="personal-information">
                <h2>Personal Information</h2>
                {userDetails?.map((detail: any, Index: any) => (
                  <div className="box" key={Index}>
                    <div className="data">
                      <h2>full Name</h2>
                      <p>
                        {detail?.profile.firstName} {detail?.profile.lastName}
                      </p>
                    </div>
                    <div className="data">
                      <h2>Phone Number</h2>
                      <p>{detail?.phoneNumber}</p>
                    </div>
                    <div className="data">
                      <h2>Email Address</h2>
                      <p>{detail?.email}</p>
                    </div>
                    <div className="data">
                      <h2>Bvn</h2>
                      <p>{detail?.profile.bvn}</p>
                    </div>
                    <div className="data">
                      <h2>Gender</h2>
                      <p>{detail?.profile.gender}</p>
                    </div>
                    <div className="data">
                      <h2>Marital status</h2>
                      <p>Single</p>
                    </div>
                    <div className="data">
                      <h2>Children</h2>
                      <p>None</p>
                    </div>
                    <div className="data">
                      <h2>Type of residence</h2>
                      <p>Parent’s Apartment</p>
                    </div>
                  </div>
                ))}
              </div>

              <hr />

              <div className="edu">
                <h2>Education and Employment</h2>
                {userDetails?.map((detail: any, Index: any) => (
                  <div className="box" key={Index}>
                    <div className="data">
                      <h2>level of education</h2>
                      <p>{detail?.education.level}</p>
                    </div>
                    <div className="data">
                      <h2>employment status</h2>
                      <p>{detail?.education.employmentStatus}</p>
                    </div>
                    <div className="data">
                      <h2>sector of employment</h2>
                      <p>{detail?.education.sector}</p>
                    </div>
                    <div className="data">
                      <h2>Duration of employment</h2>
                      <p>{detail?.education.duration}</p>
                    </div>
                  </div>
                ))}

                {userDetails?.map((detail: any, Index: any) => (
                  <div className="box2" key={Index}>
                    <div className="data">
                      <h2>office email</h2>
                      <p>{detail?.education.officeEmail}</p>
                    </div>
                    <div className="data2">
                      <h2>Monthly income</h2>
                      <p>
                        <span>&#8358;</span>
                        {detail?.education.monthlyIncome[0]} -{" "}
                        <span>&#8358;</span>
                        {detail?.education.monthlyIncome[1]}
                      </p>
                    </div>
                    <div className="data3">
                      <h2>loan repayment</h2>
                      <p>{detail?.education.loanRepayment}</p>
                    </div>
                  </div>
                ))}
              </div>

              <hr />

              <div className="social">
                <h2>Socials</h2>
                {userDetails?.map((detail: any, Index: any) => (
                  <div className="box" key={Index}>
                    <div className="data">
                      <h2>Twitter</h2>
                      <p>{detail?.socials.twitter}</p>
                    </div>
                    <div className="data">
                      <h2>Facebook</h2>
                      <p>{detail?.socials.facebook}</p>
                    </div>
                    <div className="data">
                      <h2>Instagram</h2>
                      <p>{detail?.socials.instagram}</p>
                    </div>
                  </div>
                ))}
              </div>

              <hr />

              <div className="guarantor">
                <h2>Guarantor</h2>
                {userDetails?.map((detail: any, Index: any) => (
                  <div className="box" key={Index}>
                    <div className="data">
                      <h2>full Name</h2>
                      <p>
                        {detail?.guarantor.firstName}{" "}
                        {detail?.guarantor.lastName}
                      </p>
                    </div>
                    <div className="data">
                      <h2>Phone Number</h2>
                      <p>{detail?.guarantor.phoneNumber}</p>
                    </div>
                    <div className="data">
                      <h2>Email Address</h2>
                      <p>{detail?.email}</p>
                    </div>
                    <div className="data">
                      <h2>Relationship</h2>
                      <p>Sister</p>
                    </div>
                  </div>
                ))}
              </div>

              <hr />

              <div className="userDetails">
                <h2></h2>
                {userDetails?.map((detail: any, Index: any) => (
                  <div className="box" key={Index}>
                    <div className="data">
                      <h2>full Name</h2>
                      <p>
                        {detail?.guarantor.firstName}{" "}
                        {detail?.guarantor.lastName}
                      </p>
                    </div>
                    <div className="data">
                      <h2>Phone Number</h2>
                      <p>{detail?.guarantor.phoneNumber}</p>
                    </div>
                    <div className="data">
                      <h2>Email Address</h2>
                      <p>{detail?.email}</p>
                    </div>
                    <div className="data">
                      <h2>Relationship</h2>
                      <p>Sister</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default User;
