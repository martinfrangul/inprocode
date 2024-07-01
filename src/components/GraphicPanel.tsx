import { useContext } from "react";
import { FetchData } from "../context/FetchData";
import { Week } from "../types";


const GraphicPanel: React.FC = () => {
  const context = useContext(FetchData);

  if (!context) {
    throw new Error("useContext must be used within a DataProvider");
  }

  const { weekData } = context;

  const element = weekData.find((item: Week) => item.id === "7");

  return (
    <div className="container flex flex-col items-center p-4 rounded-2xl bg-white max-w-xl h-96">
      <div className="h-1/4 w-full flex justify-center p-4">
        <h1 className="text-2xl font-bold">Despeses - Última setmana</h1>
      </div>
      <div className="h-1/2 flex justify-center items-center">Gráfico</div>
      <div className="flex flex-row justify-between w-full h-1/4">
        <div className="flex flex-col justify-center items-start p-3">
          <div className="text-sm">Despeses d'avui</div>
          <div className="text-3xl font-bold">
            {element ? element.value : "-"}
          </div>
        </div>
        <div className="flex flex-col justify-center items-end p-3">
          <div className="text-sm">2,4%</div>
          <div>Respecte d'ahir</div>
        </div>
      </div>
    </div>
  );
};

export default GraphicPanel;
