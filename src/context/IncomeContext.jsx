import { React, useState, useEffect, useContext, createContext } from "react";
import { db } from "../config/firebase.config";
import { useAuth } from "./AuthContext";

//create context
const IncomeContext = createContext();

function IncomeContextProvider({ children }) {
  const { currentUser } = useAuth();
  const [income, setIncome] = useState([]);

  return (
    <>
        <IncomeContext.Provider value={income}>
            {children}
        </IncomeContext.Provider>
    </>
  );
}

export default IncomeContextProvider;
//useContext
export const useIncome = () => useContext(IncomeContext);
