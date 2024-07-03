import { useContext, useState, useEffect } from "react";
import { FetchData } from "../context/FetchData";
import { Suspense } from "react";
import { useTranslation } from "react-i18next";

const TotalBalance = () => {
  const context = useContext(FetchData);
  const { weekData } = context;
  const { t } = useTranslation();

  const [totalBalanace, setTotalBalance] = useState(0);

  useEffect(() => {
    const newTotalBalance = weekData.reduce((acc, item) => acc + item.value, 0);
    setTotalBalance(newTotalBalance);
  }, [weekData]);

  return (
    <Suspense fallback="Loading...">
      <div className="container flex flex-row justify-between items-center p-4 rounded-2xl bg-[#EB765C] max-w-3xl h-32">
        <div>
          <h4 className="text-sm text-white">{t('balanceTitle')}</h4>
          <h1 className="text-2xl font-semibold text-white">{totalBalanace}</h1>
        </div>
        <div>
          <button className="text-2xl font-bold rounded-full mx-2">
            {" "}
            &lt;{" "}
          </button>
          <button className="text-2xl font-bold mx-2 w-"> &gt; </button>
        </div>
      </div>
    </Suspense>
  );
};

export default TotalBalance;
