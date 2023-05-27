import React from "react";
import Calendar from "../../assets/svg/np_calendar.svg";
import {
  numbers,
  ListState,
  _Status,
  _Org,
  popMondal,
} from "../../components/Data/Types";

interface Props {
  allUsers: any;
  setCombinedArray: any;
  setOpenModel: any;
  setIsOpen: any;
}

const Index = ({ allUsers, setCombinedArray, setOpenModel, setIsOpen }: Props) => {
  const Refs = React.useRef<any>(null);
 
  const [filters, setFilters] = React.useState<any>({
    organization: "",
    username: "",
    email: "",
    date: "",
    phoneNumber: "",
    status: "",
  });

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setFilters((prevFilters: any) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const handleFilter = () => {
    const filtered = allUsers.filter((item: any) => {
      const { organization, username, email, date, phoneNumber, status } =
        filters;

      // Check if any of the fields have a value
      const hasFilter =
        organization || username || email || date || phoneNumber || status;

      //   console.log("Item:", item);
      //   console.log("Filters:", filters);
      //   console.log("Has Filter:", hasFilter);

      if (!hasFilter) {
        // No filters applied, return all users
        return true;
      }

      // Apply filters based on selected fields
      return (
        (!organization ||
          (item.organization && item.organization === organization)) &&
        (!username || (item.username && item.username === username)) &&
        (!email || (item.email && item.email === email)) &&
        (!date || (item.date && item.date === date)) &&
        (!phoneNumber ||
          (item.phoneNumber && item.phoneNumber === phoneNumber)) &&
        (!status || (item.status && item.status === status))
      );
    });

    console.log("Filtered:", filtered);
    setCombinedArray(filtered);
    setOpenModel(false);
  };

  const handleReset = () => {
    setFilters({
      organization: "",
      username: "",
      email: "",
      date: "",
      phoneNumber: "",
      status: "",
    });
    setCombinedArray(allUsers);
  };

  // Declare a function to handle clicks on the document
  // const handleClickOutside = (event: any) => {
  //     // If the click occurred outside the modal, close the modal
  //     if (modalRef.current && !modalRef.current.contains(event.target)) {
  //       setOpenModel(false);
  //     }
  //   };

  React.useEffect(() => {
    const handleClickOutside2 = (event: any) => {
      // If the click occurred outside the modal, close the modal
      if (Refs.current && !Refs.current.contains(event.target)) {
        setOpenModel(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside2);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside2);
    };
  });

  return (
    <div className="modal" ref={Refs}>
      <form action="">
        <div className="select">
          <label htmlFor="option-select">Organization</label>
          <select
            name="option-select"
            id="option-select"
            value={filters.organization}
            onChange={handleInputChange}
          >
            {allUsers?.map((option: any) => (
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
            name="username"
            value={filters.username}
            onChange={handleInputChange}
            id="username"
            placeholder="User"
          />
        </div>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            value={filters.email}
            onChange={handleInputChange}
            placeholder="Email"
          />
        </div>
        <div className="input-group">
          <label htmlFor="date">Date</label>
          <input
            type="text"
            id="date"
            placeholder="Date"
            value={filters.date}
            onChange={handleInputChange}
          />
          <div className="calendar">
            <img src={Calendar} alt="calendar" />
          </div>
        </div>
        <div className="input-group">
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            type="text"
            name="phoneNumber"
            value={filters.phoneNumber}
            onChange={handleInputChange}
            placeholder="Phone Number"
          />
        </div>
        <div className="select">
          <label htmlFor="status">Status</label>
          <select
            name="status"
            id="status"
            value={filters.status}
            onChange={handleInputChange}
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
        <button className="btn1" onClick={handleReset}>
          Reset
        </button>
        <button className="btn2" onClick={handleFilter}>
          Filter
        </button>
      </div>
    </div>
  );
};

export default Index;
