import React, { useEffect, useState, useRef, useMemo } from "react";
import axios from "axios";
import { useQuery } from "react-query";
import moment from "moment";
import { AuthProvider } from "../../hooks/useAuth/index";
import Pagination from "../pagination";
import {
  numbers,
  ListState,
  _Status,
  popMondal,
} from "../../component/Data/Types";

interface Table {
  table: any;
  table2: any;
}

interface Option {
  value: string;
  label: string;
}
const today = new Date();
const defaultDate = today.toISOString().substring(0, 10);
let PageSize = 10;

const Index = ({ table, table2 }: Table) => {
  const modalRef = useRef<any>(null);
  const Refs = useRef<any>(null);
  const [openModel, setOpenModel] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [options, setOptions] = useState<Option[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedOption, setSelectedOption] = useState<any>("Select");
  const [name, setName] = useState<any>("");
  const [phone, setPhone] = useState<any>("");
  const [date, setDate] = useState<any>(defaultDate);
  const [organization, setOrganization] = useState<any>("Select");
  const [email, setEmail] = useState<any>("");
  const [status, SetStatus] = useState<any>("Select");
  const [selectedNumberOfData, setSelectedNumberOfData] = useState<any>();

  const { getUserDetails } = AuthProvider();

  const handleOpenModel = () => {
    setOpenModel(true);
  };

  const handleIsModel = () => {
    setIsOpen(true);
  };

  //Route to UserDetails
  const handleRoute = () => {
    table(false);
    table2(true);
  };

  // Declare a function to handle clicks on the document
  const handleClickOutside = (event: any) => {
    // If the click occurred outside the modal, close the modal
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setOpenModel(false);
    }
  };

  const handleClickOutside2 = (event: any) => {
    // If the click occurred outside the modal, close the modal
    if (Refs.current && !Refs.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("mousedown", handleClickOutside2);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("mousedown", handleClickOutside2);
    };
  });

  //Fetch users Info
  const { data } = useQuery("users", () =>
    axios
      .get(`https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users`)
      .then((res) => res.data)
  );

  const combinedArray = data?.map((obj: any, index: any): any => ({
    ...obj,
    element: (ListState || [])[index % (ListState?.length || 0)],
  }));

  // const filteredData = combinedArray?.filter((item: any) => {
  //   console.log("item:", item); // print out each item in combinedArray
  //   if (name && item.userName !== name) {
  //     return false;
  //   }
  //   if (organization && item.orgName !== organization) {
  //     return false;
  //   }
  //   if (email && item.email !== email) {
  //     return false;
  //   }
  //   if (date && item.createdAt !== date) {
  //     return false;
  //   }
  //   if (phone && item.phoneNumber !== phone) {
  //     return false;
  //   }
  //   if (status && item.element !== status) {
  //     return false;
  //   }
  //   return true;
  // });

  function filterData(
    data: any[],
    name?: string,
    organization?: string,
    email?: string,
    date?: string,
    phone?: string,
    status?: string
  ) {
    return data?.filter((item: any) => {
      if (name && item.userName !== name) {
        return false;
      }
      if (organization && item.orgName !== organization) {
        return false;
      }
      if (email && item.email !== email) {
        return false;
      }
      if (date && item.createdAt !== date) {
        return false;
      }
      if (phone && item.phoneNumber !== phone) {
        return false;
      }
      if (status && item.element !== status) {
        return false;
      }
      return true;
    });
  }
  // console.log(filteredData); // Output: [{ userName: 'Alice', orgName: 'Acme', email: 'alice@acme.com', createdAt: '2022-01-01', phoneNumber: '123-456-7890', element: 'active' }]
  const currentTableData = useMemo(() => {
    const filteredData = filterData(
      combinedArray,
      name,
      organization,
      email,
      date,
      phone,
      status
    );
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return combinedArray?.slice(firstPageIndex, lastPageIndex) || [];
  }, [combinedArray, currentPage, selectedNumberOfData]);

  // print out the value of combinedArray
  // console.log("filteredData:", filteredData); // print out the value of filteredData

  // const currentTableData = useMemo(() => {
  //   const firstPageIndex = (currentPage - 1) * PageSize;
  //   const lastPageIndex = firstPageIndex + PageSize;
  //   return combinedArray?.slice(firstPageIndex, lastPageIndex) || [];
  // }, [combinedArray, currentPage, selectedNumberOfData]);

  return (
    <>
      <div className="table-container">
        {openModel && (
          <div className="modal" ref={modalRef}>
            <form action="">
              <div className="select">
                <label htmlFor="option-select">Organization</label>
                <select
                  name="option-select"
                  id="option-select"
                  value={organization}
                  onChange={(event) => setOrganization(event.target.value)}
                >
                  {combinedArray?.map((option: any) => (
                    <option key={option.value} value={option.orgName}>
                      {option.orgName}
                    </option>
                  ))}
                </select>
              </div>
              <div className="input-group">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  value={name}
                  id="username"
                  placeholder="User"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="input-group">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  id="email"
                  value={email}
                  placeholder="Email"
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>
              <div className="input-group">
                <label htmlFor="date">Date</label>
                <input
                  type="text"
                  id="date"
                  placeholder="Date"
                  value={date}
                  onChange={(event) => setDate(event.target.value)}
                />
              </div>
              <div className="input-group">
                <label htmlFor="phoneNumber">Phone Number</label>
                <input
                  type="text"
                  id="phoneNumber"
                  placeholder="Phone Number"
                  value={phone}
                  onChange={(event) => setPhone(event.target.value)}
                />
              </div>
              <div className="select">
                <label htmlFor="status">Status</label>
                <select
                  name="status"
                  id="status"
                  value={status}
                  onChange={(event) => SetStatus(event.target.value)}
                >
                  {_Status?.map((option: any) => (
                    <option key={option.id} value={option.number}>
                      {option.number}
                    </option>
                  ))}
                </select>
              </div>
            </form>

            <div className="btn">
              <button className="btn1">Reset</button>
              <button className="btn2">Filter</button>
            </div>
          </div>
        )}
        <div className="table-content">
          <table>
            <thead>
              <tr>
                <th onClick={handleOpenModel}>
                  organization{" "}
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.22222 13.3333H9.77778V11.5555H6.22222V13.3333ZM0 2.66666V4.44443H16V2.66666H0ZM2.66667 8.88888H13.3333V7.1111H2.66667V8.88888Z"
                      fill="#545F7D"
                    />
                  </svg>
                </th>
                <th onClick={handleOpenModel}>
                  Username
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.22222 13.3333H9.77778V11.5555H6.22222V13.3333ZM0 2.66666V4.44443H16V2.66666H0ZM2.66667 8.88888H13.3333V7.1111H2.66667V8.88888Z"
                      fill="#545F7D"
                    />
                  </svg>
                </th>
                <th>
                  Email
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    onClick={handleOpenModel}
                  >
                    <path
                      d="M6.22222 13.3333H9.77778V11.5555H6.22222V13.3333ZM0 2.66666V4.44443H16V2.66666H0ZM2.66667 8.88888H13.3333V7.1111H2.66667V8.88888Z"
                      fill="#545F7D"
                    />
                  </svg>
                </th>
                <th onClick={handleOpenModel}>
                  Phone number
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.22222 13.3333H9.77778V11.5555H6.22222V13.3333ZM0 2.66666V4.44443H16V2.66666H0ZM2.66667 8.88888H13.3333V7.1111H2.66667V8.88888Z"
                      fill="#545F7D"
                    />
                  </svg>
                </th>
                <th onClick={handleOpenModel}>
                  Date joined
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.22222 13.3333H9.77778V11.5555H6.22222V13.3333ZM0 2.66666V4.44443H16V2.66666H0ZM2.66667 8.88888H13.3333V7.1111H2.66667V8.88888Z"
                      fill="#545F7D"
                    />
                  </svg>
                </th>
                <th onClick={handleIsModel}>
                  Status
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.22222 13.3333H9.77778V11.5555H6.22222V13.3333ZM0 2.66666V4.44443H16V2.66666H0ZM2.66667 8.88888H13.3333V7.1111H2.66667V8.88888Z"
                      fill="#545F7D"
                    />
                  </svg>
                </th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {currentTableData?.map((row: any) => (
                <tr key={row.id}>
                  <td
                    onClick={() => {
                      getUserDetails(row?.id);
                      handleRoute();
                    }}
                  >
                    {row.orgName}
                  </td>
                  <td
                    onClick={() => {
                      getUserDetails(row?.id);
                      handleRoute();
                    }}
                  >
                    {row.userName}
                  </td>
                  <td
                    onClick={() => {
                      getUserDetails(row?.id);
                      handleRoute();
                    }}
                  >
                    {row.email}
                  </td>
                  <td
                    onClick={() => {
                      getUserDetails(row?.id);
                      handleRoute();
                    }}
                  >
                    {row.phoneNumber}
                  </td>
                  <td
                    onClick={() => {
                      getUserDetails(row?.id);
                      handleRoute();
                    }}
                  >
                    {moment(row.createdAt).format("MMM DD, YYYY hh:mm A")}
                  </td>
                  <td
                    className={
                      row.element === "Active"
                        ? "Green"
                        : "" || row.element === "Inactive"
                        ? "Gray"
                        : "" || row.element === "Pending"
                        ? "pending"
                        : "" || row.element === "Blacklisted"
                        ? "Red"
                        : ""
                    }
                    onClick={() => {
                      getUserDetails(row?.id);
                      handleRoute();
                    }}
                  >
                    {row.element}
                  </td>
                  <td onClick={handleIsModel}>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_5530_2634)">
                        <path
                          d="M9.99992 6.1111C10.9221 6.1111 11.6666 5.36666 11.6666 4.44444C11.6666 3.52222 10.9221 2.77777 9.99992 2.77777C9.0777 2.77777 8.33325 3.52222 8.33325 4.44444C8.33325 5.36666 9.0777 6.1111 9.99992 6.1111ZM9.99992 8.33333C9.0777 8.33333 8.33325 9.07777 8.33325 9.99999C8.33325 10.9222 9.0777 11.6667 9.99992 11.6667C10.9221 11.6667 11.6666 10.9222 11.6666 9.99999C11.6666 9.07777 10.9221 8.33333 9.99992 8.33333ZM9.99992 13.8889C9.0777 13.8889 8.33325 14.6333 8.33325 15.5555C8.33325 16.4778 9.0777 17.2222 9.99992 17.2222C10.9221 17.2222 11.6666 16.4778 11.6666 15.5555C11.6666 14.6333 10.9221 13.8889 9.99992 13.8889Z"
                          fill="#545F7D"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_5530_2634">
                          <rect width="20" height="20" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {isOpen && (
          <div className="row" ref={Refs}>
            <div className="content">
              {popMondal.map((item: any) => (
                <div className="item" key={item.id}>
                  <img src={item.image} alt="" />
                  <span>{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <div className="pagination">
        <div className="showing">
          <h3>showing</h3>
          <select
            name="option-select"
            id="option-select"
            value={selectedNumberOfData}
            onChange={(e) => setSelectedNumberOfData(e.target.value)}
          >
            {numbers?.map((option: any) => (
              <option key={option.id} value={option.number}>
                {option.number}
              </option>
            ))}
          </select>
          <p>Out of 100</p>
        </div>
        <Pagination
          className="pagination-bar"
          currentPage={currentPage}
          totalCount={combinedArray?.length}
          pageSize={PageSize}
          onPageChange={(page: any) => setCurrentPage(page)}
        />
      </div>
    </>
  );
};

export default Index;
