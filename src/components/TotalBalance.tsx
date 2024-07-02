import { useContext, useState, useEffect } from "react";
import { FetchData } from "../context/FetchData";

const TotalBalance = () => {
  const context = useContext(FetchData);
  const { weekData } = context;

  const [totalBalanace, setTotalBalance] = useState(0);
 
  useEffect(() => {
    const newTotalBalance = weekData.reduce((acc, item) => acc + item.value, 0);
    setTotalBalance(newTotalBalance);
  }, [weekData]);

  return (
    <div className="container flex flex-row justify-between items-center p-4 rounded-2xl bg-[#EB765C] max-w-3xl h-32 mt-4">
      <div>
        <h4 className="text-sm text-white">Balanç Total</h4>
        <h1 className="text-2xl font-semibold text-white">{totalBalanace}</h1>
      </div>
      <div>
        <button className="text-2xl font-bold rounded-full mx-2"> &lt; </button>
        <button className="text-2xl font-bold mx-2 w-"> &gt; </button>
      </div>
    </div>
  );
};

export default TotalBalance;
