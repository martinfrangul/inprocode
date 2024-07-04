import { useContext, useState, useEffect } from "react";
import { FetchData } from "../context/FetchData";
import { Suspense } from "react";
import { useTranslation } from "react-i18next";

const TotalBalance = () => {
  const context = useContext(FetchData);

  if (!context) {
    throw new Error("useContext must be used within a DataProvider");
  }

  const { weekData, weekNum, setWeekNum } = context;
  const { t } = useTranslation();

  const nextWeek = async () => {
    const nextWeekNum = (parseInt(weekNum) + 1).toString();
    try {
      const response = await fetch(`http://localhost:8000/week${nextWeekNum}`, {
        method: "GET",
      });

      if (response.ok) {
        setWeekNum(nextWeekNum);
      } else {
        console.log("Next week does not exist.");
      }
    } catch (error) {
      console.error("Error fetching next week data:", error);
    }
  };

  const prevWeek = async () => {
    const nextWeekNum = (parseInt(weekNum) - 1).toString();
    try {
      const response = await fetch(`http://localhost:8000/week${nextWeekNum}`, {
        method: "GET",
      });

      if (response.ok) {
        setWeekNum(nextWeekNum);
      } else {
        console.log("There's no more data");
      }
    } catch (error) {
      console.error("Error fetching next week data:", error);
    }
  };

  const [totalBalanace, setTotalBalance] = useState(0);

  useEffect(() => {
    const newTotalBalance = weekData.reduce((acc, item) => acc + item.value, 0);
    setTotalBalance(newTotalBalance);
  }, [weekData]);

  return (
    <Suspense fallback="Loading...">
      <div className="container flex flex-row justify-between items-center p-4 rounded-2xl bg-[#EB765C] max-w-3xl h-32">
        <div>
          <h4 className="text-sm text-white">{t("balanceTitle")}</h4>
          <h1 className="text-2xl font-semibold text-white">{totalBalanace}</h1>
        </div>
        <div>
          <button
            onClick={prevWeek}
            className="text-2xl font-bold rounded-full mx-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5"
              />
            </svg>
          </button>
          <button onClick={nextWeek} className="text-2xl font-bold mx-2 w-">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </Suspense>
  );
};

export default TotalBalance;
