"use client"
import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { User, getAuth } from "firebase/auth/cordova";
import app from '@/firebase/firebase'

interface AuthInfo {
  teamDetails: {
    TeamName?: string;
    category?: string
  };

  newTeam: object;
  setTeamDetails: React.Dispatch<React.SetStateAction<any>>;
  createUser: (email: string, pass: string) => void;
  setNewTeam: (team: object) => void;
  signUpUser: (email: string, pass: string) => void;
  logout: () => void
  user: User | null;

}



export const AuthContext = createContext<AuthInfo | null>(null);
const auth = getAuth(app)

const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [teamDetails, setTeamDetails] = useState({});
  const [newTeam, setNewTeam] = useState({});
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const createUser = (email: string, password: string) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const signUpUser = (email: string, password: string) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
  }

  const logout = () => {
    setLoading(true);
    return signOut(auth)
  }
  //  console.log(user);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user: any) => {
      setUser(user)
      setLoading(false)
    })

    return () => {
      return unsubscribe();
    }
  }, [])


  const authInfo: AuthInfo = {
    teamDetails,
    setTeamDetails,
    createUser,
    setNewTeam,
    newTeam,
    signUpUser,
    user,
    logout
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
