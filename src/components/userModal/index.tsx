import React from "react";
import { popMondal } from "../Data/Types";
import ApiProvider from "../../utils/api/apiProvider";
import { UserContext } from "../../utils/contextApi";

interface Props {
  setIsOpen: any;
  handleRoute: any;
  id: any;
}

const Index = ({ setIsOpen, handleRoute, id }: Props) => {
  const modalRef = React.useRef<any>(null);
  const { getUserDetailsById } = ApiProvider();
  const { setUserId } = React.useContext(UserContext);

  React.useEffect(() => {
    const handleClickOutside = (event: any) => {
      // If the click occurred outside the modal, close the modal
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  return (
    <div className="row" ref={modalRef}>
      <div className="content">
        {popMondal.map((item: any, index: number) => (
          <>
            {/* {index === 0 && ( */}
              <div
                className="item"
                key={item.id}
                onClick={() => {
                  getUserDetailsById(id);
                  setUserId(id);
                  handleRoute();
                }}
              >
                <img src={item.image} alt="" />
                <span>{item.name}</span>
              </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Index;
