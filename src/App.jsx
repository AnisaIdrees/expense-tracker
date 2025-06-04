import React from "react";
import Routes from "./routing/Routes";
import "./App.css";
import { AuthProvider } from "./context/AuthContext";
import IncomeContextProvider from "./context/IncomeContext";

function App() {
  return (

    <AuthProvider>
      <IncomeContextProvider>
        <Routes />
      </IncomeContextProvider>
    </AuthProvider>
    
  );
}

export default App;
