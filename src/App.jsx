import React from "react";
import Routes from "./routing/Routes";
import "./App.css";
import { AuthProvider} from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}

export default App;
