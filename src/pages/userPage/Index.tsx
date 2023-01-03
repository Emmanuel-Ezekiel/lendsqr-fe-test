import React from "react";
import "../../styles/pages/userPage.scss";
import Widget from "../../component/widget";
import Table from "../../component/table";
import Back from "../../assets/np_back.svg";
import { WIDGET_DATA } from "../../component/Data/Types";
import Avatar from "../../assets/avatar.svg";
import Star1 from "../../assets/np_star_1.svg";
import Star2 from "../../assets/np_star_2.svg";


const Index = () => {
  const [isUserOpen, setIsUserOpen] = React.useState<boolean>(true);
  const [isDetailsOpen, setIsDetailsOpen] = React.useState<boolean>(false);
  const value: any = window.localStorage.getItem("userDetails");
  const userDetails = JSON.parse(value);
  const userNewData = [userDetails];

  //Fetch users Detail

  const handleRoute = () => {
    setIsUserOpen(true);
    setIsDetailsOpen(false);
  };

  return (
    <>
      {isUserOpen && (
        <div className="user-container" data-testId="user-page">
          <h2>Users</h2>

          <div className="widget">
            <Widget data={[WIDGET_DATA[0]]} />
            <Widget data={[WIDGET_DATA[1]]} />
            <Widget data={[WIDGET_DATA[2]]} />
            <Widget data={[WIDGET_DATA[3]]} />
          </div>

          <Table
            table={setIsUserOpen}
            table2={setIsDetailsOpen}
          />
        </div>
      )}

      {isDetailsOpen && (
        <div className="user-Detail">
          <div className="backBtn" onClick={handleRoute}>
            <img src={Back} alt="" />
            <span>Back to Users</span>
          </div>

          <div className="user-box">
            <h2>User Details</h2>

            <div className="btns">
              <button className="btn1">Blacklist User</button>
              <button className="btn2">Activate User</button>
            </div>
          </div>

          <div className="board">
            {userNewData?.map((detail?: any) => (
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
            <div className="tabs">
              <span>General Details</span>
              <span>Documents</span>
              <span>Bank Details</span>
              <span>Loans</span>
              <span>Savings</span>
              <span>App and System</span>
            </div>
          </div>

          <div className="board2">
            <div className="personal-information">
              <h2>Personal Information</h2>
              {userNewData?.map((detail: any, Index: any) => (
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
              {userNewData?.map((detail: any, Index: any) => (
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

              {userNewData?.map((detail: any, Index: any) => (
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
              {userNewData?.map((detail: any, Index: any) => (
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
              {userNewData?.map((detail: any, Index: any) => (
                <div className="box" key={Index}>
                  <div className="data">
                    <h2>full Name</h2>
                    <p>
                      {detail?.guarantor.firstName} {detail?.guarantor.lastName}
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
              {userNewData?.map((detail: any, Index: any) => (
                <div className="box" key={Index}>
                  <div className="data">
                    <h2>full Name</h2>
                    <p>
                      {detail?.guarantor.firstName} {detail?.guarantor.lastName}
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
      )}
    </>
  );
};

export default Index;
