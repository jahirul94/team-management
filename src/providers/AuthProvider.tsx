"use client"
import { createContext, useEffect, useState, ReactNode } from "react";

interface AuthInfo {
  teamDetails: {
    TeamName?: string;
    category?: string
  };
  setTeamDetails: React.Dispatch<React.SetStateAction<any>>;
}

export const AuthContext = createContext<AuthInfo | null>(null);

const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [teamDetails, setTeamDetails] = useState({});

  const authInfo: AuthInfo = {
    teamDetails,
    setTeamDetails,
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
