import React, { createContext, useContext, useEffect, useState } from "react";
import Papa from "papaparse";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const initIndex = 1000;
  const [data, setData] = useState([]);
  const [currentData, setCurrentData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(initIndex);

  useEffect(() => {
    Papa.parse("/data.csv", {
      download: true,
      header: true,
      complete: (result) => {
        setData(result.data.slice(0, initIndex));
      },
    });
  }, []);

  useEffect(() => {
    if (data.length === 0) return;

    const interval = setInterval(() => {
      setCurrentData(data[currentIndex]);
      setCurrentIndex((prev) => (prev + 1) % data.length);
    }, 1500);

    return () => clearInterval(interval);
  }, [data, currentIndex]);

  return (
    <DataContext.Provider value={{ data, currentData }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useData must be used within a DataProvider");
  }

  return context;
};
