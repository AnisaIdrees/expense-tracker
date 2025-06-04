import React, { createContext, useContext, useEffect, useState } from "react";
import { auth, onAuthStateChanged } from "../config/firebase.config";

const AuthContext = createContext();


export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
// custom hook
export const useAuth = () => useContext(AuthContext);