import React from "react";
import { useState, useEffect } from "react";

export const useFetch = (reload) => {
  const [data, setData] = useState(null);
  const [IsPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  const request = async () => {
    setIsPending(true);
    const responce = await fetch("http://localhost:3000/trips");
    const data = await responce.json();
    setIsPending(false);
    setData(data);
  };

  useEffect(() => {
    request();
  }, [reload]);

  const filterData = (id) => {
    const filteredData = data.filter((value) => {
      return id !== value.id;
    });
    setData(filteredData);
  };
  return { data, IsPending, error, filterData };
};
