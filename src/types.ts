export type Week = {
    id: string;
    name: string;
    value: number;
  };
  
  export type FetchDataContextType = {
    weekData: Week[];
    setWeekData: React.Dispatch<React.SetStateAction<Week[]>>;
  };