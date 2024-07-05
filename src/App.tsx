// COMPONENTES
import TotalBalance from "./components/TotalBalance";
import GraphicPanel from "./components/GraphicPanel";
import { DataProvider } from "./context/FetchData";
import LanguageSelection from "./components/LanguageSelection";

import "./App.css";

function App() {
  return (
    <div className="flex flex-col justify-center gap-2 items-center m-auto max-h-screen bg-[#F8EBDE] h-full w-full">
      <LanguageSelection />
      <DataProvider>
        <TotalBalance />
        <GraphicPanel />
      </DataProvider>
    </div>
  );
}

export default App;
