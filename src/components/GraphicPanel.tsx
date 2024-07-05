import Graphic from "./elements/Graphic";
import InfoExtra from "../components/elements/InfoExtra"
import { useTranslation } from "react-i18next";

const GraphicPanel: React.FC = () => {

  const { t } = useTranslation();

  return (
    <div className="container flex flex-col items-center p-4 rounded-2xl bg-white max-w-3xl h-full mb-4">
      <div className="h-fit w-full flex justify-center p-4">
        <h1 className="text-2xl font-bold">{t('graphicTitle')}</h1>
      </div>
      <div className="h-full w-full flex justify-center items-center">
        <Graphic></Graphic>
      </div>
      <div className="flex flex-row justify-between w-full h-fit">
        <InfoExtra></InfoExtra>
      </div>
    </div>
  );
};

export default GraphicPanel;
