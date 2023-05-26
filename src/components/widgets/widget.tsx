import React, { useEffect } from "react";
import "../../styles/components/widget.scss";
import { Data2 } from "../Data/Types";


interface Props {
  data: Data2[];
}

const Widget: React.FC<Props> = ({ data }) => {
  return (
    <div className="widget-container">
      {data.map((item) => (
        <>
          <img src={item.image} alt="widgetImage" />
          <h3>{item.name}</h3>
          <span>{item.number}</span>
        </>
      ))}
    </div>
  );
};

export default Widget;