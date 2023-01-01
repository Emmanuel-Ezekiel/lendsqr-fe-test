import React, { useEffect, useState } from "react";
import axios from "axios";
import { useQuery } from "react-query";
import moment from "moment";
import Pagination from "react-paginate";
import { useNavigate } from "react-router-dom";
import { AuthProvider } from "../../hooks/useAuth/index";

interface Table {
  table: any;
  table2: any;
}

const Index = ({ table, table2, }: Table) => {
  let navigate = useNavigate();

  const { getUserDetails  } =  AuthProvider();

  //Route to UserDetails
  const handleRoute = () => {
    table(false);
    table2(true);
  };

  //Fetch users Info
  const { data, isLoading, error } = useQuery("users", () =>
    axios
      .get("https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users")
      .then((res) => res.data)
  );

  const status: Array<string> = [
    "Inactive",
    "Pending",
    "Blacklisted",
    "Pending",
    "Active",
    "Active",
    "Blacklisted",
    "Inactive",
    "Inactive",
  ];

  const combinedArray = data?.map((obj: any, index: any): any => ({
    ...obj,
    element: status[index % status.length],
  }));

  // setPageCount(Math.ceil(combinedArray?.length / pageSize));

  // const handlePageChange = (page: any) => {
  //   setPage(page.selected);
  //   // Calculate the start and end indices for the data to be displayed on the current page
  //   const startIndex = page.selected * pageSize;
  //   const endIndex = startIndex + pageSize;
  //   // Extract the data for the current page from the full data set
  //   const currentPageData = combinedArray?.slice(startIndex, endIndex);
  //   // Update the state with the current page data
  //   setDisplayedData(currentPageData);
  // }

  return (
    <>
      <div className="table-container">
        <div className="table-content">
          <table>
            <thead>
              <tr>
                <th>
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
                <th>
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
                  >
                    <path
                      d="M6.22222 13.3333H9.77778V11.5555H6.22222V13.3333ZM0 2.66666V4.44443H16V2.66666H0ZM2.66667 8.88888H13.3333V7.1111H2.66667V8.88888Z"
                      fill="#545F7D"
                    />
                  </svg>
                </th>
                <th>
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
                <th>
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
                <th>
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
              {combinedArray
                ?.filter((n: any, i: any): any => i < 10)
                .map((row: any) => (
                  <tr
                    key={row.id}
                    onClick={() => {
                      getUserDetails(row?.id);
                      handleRoute();
                    }}
                  >
                    <td>{row.orgName}</td>
                    <td>{row.userName}</td>
                    <td>{row.email}</td>
                    <td>{row.phoneNumber}</td>
                    <td>
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
                    >
                      {row.element}
                    </td>
                    <td>
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
      </div>
      <div className="pagination"></div>
    </>
  );
};

export default Index;
