import React, { useState, useEffect } from "react";
import "./index.css";
import Loading from "./Loading";
import Tours from "./Tours";
import { useFetch } from "./hooks/useFetch";

function App() {
  const [reload, setReload] = useState(false);
  const { data, IsPending, error, filterData } = useFetch(reload);
  if (data && data.length == 0) {
    return (
      <main>
        <h1 className="title">No Tours Left</h1>
        <button
          className=""
          onClick={() => {
            console.log(1);
            setReload(!reload);
          }}
        >
          Refresh
        </button>
      </main>
    );
  }
  if (data) {
    return (
      <main>
        <h1 className="title">Tours Project Setup</h1>
        {IsPending && <Loading></Loading>}
        {error && <div>{error}</div>}
        <Tours data={data} filterData={filterData}></Tours>
      </main>
    );
  }
  return <Loading></Loading>;
}

export default App;
