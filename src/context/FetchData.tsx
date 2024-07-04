import { createContext, useState, useEffect, ReactNode } from "react";
import { Week, FetchDataContextType } from "../types";

const FetchData = createContext<FetchDataContextType | undefined>(undefined);

const DataProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [weekData, setWeekData] = useState<Week[]>([]);
  const [weekNum, setWeekNum] = useState("4");

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`http://localhost:8000/week${weekNum}`, {
          method: "GET",
        });
        if (!response.ok) {
          throw new Error("Network response was not ok " + response.statusText);
        }
        const data = await response.json();
        setWeekData(data);
      } catch (error) {
        console.error(
          "There has been a problem with your fetch operation:",
          error
        );
      }
    }

    fetchData();
  }, [weekNum]);

  return (
    <FetchData.Provider value={{ weekData, setWeekData, weekNum, setWeekNum }}>
      {children}
    </FetchData.Provider>
  );
};

export { FetchData, DataProvider };
