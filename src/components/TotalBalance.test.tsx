// TotalBalance.test.tsx

import { ReactNode } from "react";
import { describe, test, vi } from "vitest";
import { render } from "@testing-library/react";
import TotalBalance from "./TotalBalance";
import { FetchData } from "../context/FetchData";
import { Week, FetchDataContextType } from "../types";
// import '@testing-library/jest-dom';  // Importar jest-dom para los matchers extendidos

const mockWeekData: Week[] = [
  { id: "1", name: "Week 1", value: 100 },
  { id: "2", name: "Week 2", value: 200 },
  { id: "3", name: "Week 3", value: 300 },
];

const mockContextValue: FetchDataContextType = {
  weekData: mockWeekData,
  setWeekData: vi.fn(),
};

interface MockFetchDataProviderProps {
  children: ReactNode;
}

const MockFetchDataProvider: React.FC<MockFetchDataProviderProps> = ({ children }) => (
  <FetchData.Provider value={mockContextValue}>
    {children}
  </FetchData.Provider>
);

describe("Balance total", () => {
  test("should render TotalBalance component", () => {
    render(
      <MockFetchDataProvider>
        <TotalBalance />
      </MockFetchDataProvider>
    );
  });
});


// test("should display total balance correctly", () => {
//     const { getByText } = render(
//       <MockFetchDataProvider>
//         <TotalBalance />
//       </MockFetchDataProvider>
//     );
  
//     expect(getByText("600")).toBeInTheDocument();  // Aquí se espera que el total sea 600 (100 + 200 + 300)
//   });