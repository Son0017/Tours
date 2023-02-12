import React, { useState } from "react";
import "./index.css";
const Tour = ({ data, filterData }) => {
  const { id, name, info, image, price } = data;
  const [showMore, setShowMore] = useState(false);

  return (
    <div key={id} className="single-tour">
      <img src={image} alt="" />
      <div className="tour-info">
        <span className="tour-price">$ {price}</span>
        <h4>{name}</h4>
        <p>
          {showMore ? info : info.substr(0, 250)}
          <button
            onClick={() => {
              setShowMore(!showMore);
            }}
          >
            read more
          </button>
        </p>
        <button
          className="delete-btn"
          onClick={() => {
            filterData(id);
          }}
        >
          not interested
        </button>
      </div>
    </div>
  );
};

export default Tour;
