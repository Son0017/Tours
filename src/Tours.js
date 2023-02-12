import React from "react";
import Tour from "./Tour";
import "./index.css";

const Tours = ({ data, filterData }) => {
  return (
    <section>
      <div className="title">
        <h3>Our Tours</h3>
        <div className="underline"></div>
      </div>
      <div className="tours">
        {data.map((data) => {
          return (
            <Tour key={data.id} data={data} filterData={filterData}></Tour>
          );
        })}
      </div>
    </section>
  );
};

export default Tours;
