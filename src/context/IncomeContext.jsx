import { React, useState, useEffect, useContext, createContext } from "react";
import { db } from "../config/firebase.config";
import { useAuth } from "./AuthContext";
import { addIncome } from "../services/IncomeService";

//create context
const IncomeContext = createContext();

function IncomeContextProvider({ children }) {
  const { currentUser } = useAuth();
  const [income, setIncome] = useState([]);

  useEffect(() => {

    // setIncome(addIncome)

  },[currentUser])

  return (
    <>
      <IncomeContext.Provider value={{ income, addIncome }}>
        {children}
      </IncomeContext.Provider>
    </>
  );
}

export default IncomeContextProvider;
//useContext
export const useIncome = () => useContext(IncomeContext);
