import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { app } from "../firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);

const UserContext = ({ children }) => {
  const [user, setUser] = useState({});
  const [loader, setLoader] = useState(true);

  const singUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // for logOut_____________________________________________________________________________________
  const logOut = () => {
    return signOut(auth);
  };

  // update user profile
  const updateUser = (name) => {
    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: "",
    });
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (CurrntUser) => {
      setUser(CurrntUser);
      setLoader(false);
    });
    return () => unSubscribe();
  }, []);

  const userInfo = {
    user,
    login,
    singUp,
    updateUser,
    logOut,
  };

  return (
    <div>
      <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default UserContext;
