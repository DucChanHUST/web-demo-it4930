import React, { createContext, useContext, useEffect, useState } from "react";
import Papa from "papaparse";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const initIndex = 2705;
  const [data, setData] = useState([]);
  const [allData, setAllData] = useState([]);
  const [currentData, setCurrentData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(initIndex);

  useEffect(() => {
    Papa.parse("/data.csv", {
      download: true,
      header: true,
      complete: (result) => {
        setData(result.data.slice(0, initIndex));
        setAllData(result.data);
      },
    });
  }, []);

  useEffect(() => {
    if (data.length === 0) return;

    const interval = setInterval(() => {
      setCurrentData(allData[currentIndex]);
      setCurrentIndex((prev) => prev + 1);
    }, 1500);

    return () => clearInterval(interval);
  }, [data, currentIndex, allData]);

  return (
    <DataContext.Provider value={{ data, currentData, currentIndex }}>
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
