import Graphic from "./Panel/Graphic";
import { useTranslation } from "react-i18next";
import { useContext, useState, useEffect } from "react";
import { FetchData } from "../context/FetchData";
import { Week } from "../types";

const GraphicPanel: React.FC = () => {
  const [percComparedWithYest, setPercComparedWithYest] = useState(0);

  const context = useContext(FetchData);
  const { t } = useTranslation();

  if (!context) {
    throw new Error("useContext must be used within a DataProvider");
  }

  const { weekData } = context;

  const todayElement = weekData.find((item: Week) => item.name === "Tuesday");
  const yesterdayElement = weekData.find((item: Week) => item.name === "Monday");

  useEffect(() => {
    if (todayElement && yesterdayElement) {
      let newPercComparedWithYest: number;

      if (todayElement.value > yesterdayElement.value) {
        newPercComparedWithYest = 100 -
          parseInt(
            ((yesterdayElement.value * 100) / todayElement.value).toFixed(1)
          );
      } else {
        newPercComparedWithYest =
          parseInt(
            ((todayElement.value * 100) / yesterdayElement.value).toFixed(1)
          ) - 100;
      }
      setPercComparedWithYest(newPercComparedWithYest);
    }
  }, [weekData]);

  return (
    <div className="container flex flex-col items-center p-4 rounded-2xl bg-white max-w-3xl h-full mb-4">
      <div className="h-fit w-full flex justify-center p-4">
        <h1 className="text-2xl font-bold">{t('graphicTitle')}</h1>
      </div>
      <div className="h-full w-full flex justify-center items-center">
        <Graphic></Graphic>
      </div>
      <div className="flex flex-row justify-between w-full h-fit">
        <div className="flex flex-col justify-center items-start p-3">
          <div className="text-sm">{t("todayExpensesTitle")}</div>
          <div className="text-3xl font-bold">
            {todayElement ? todayElement.value : "-"}
          </div>
        </div>
        <div className="flex flex-col justify-center items-end p-3">
          <div className="text-sm">
            {Math.sign(percComparedWithYest) == 1 && `+${percComparedWithYest} %`}
            {Math.sign(percComparedWithYest) == -1 && `${percComparedWithYest} %`}
            
            </div>
          <div>{t("yesterdayComparisonTitle")}</div>
        </div>
      </div>
    </div>
  );
};

export default GraphicPanel;
