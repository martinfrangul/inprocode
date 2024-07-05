import spaFlag from "../assets/banderas/spa.svg"
import ukFlag from "../assets/banderas/eng.svg"
import catFlag from "../assets/banderas/cat.svg"

import { useTranslation } from "react-i18next";

const LangPanel = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="container flex flex-row justify-end gap-5 max-w-3xl mt-3 items-end h-fit">
      <button className="p-3" onClick={() => changeLanguage("es")}>
        <img className="w-7" src={spaFlag} alt="spain-flag" />
      </button>
      <button className="p-3" onClick={() => changeLanguage("en")}>
        <img className="w-7" src={ukFlag} alt="uk-flag" />
      </button>
      <button className="p-3" onClick={() => changeLanguage("cat")}>
        <img className="w-7" src={catFlag} alt="catalonia-flag" />
      </button>
    </div>
  );
};

export default LangPanel;
