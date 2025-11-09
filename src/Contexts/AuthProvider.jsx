import React, { useEffect, useState } from "react";

import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../Firebase/firebase.config";
import { AuthContext } from "./AuthContext";

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const googleSignIn = () => {
    setLoading(true)
    return signInWithPopup(auth, googleProvider);
  };

  const userSignOut = ()=>{
    setLoading(true)
    return signOut(auth)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currUser) => {
      setUser(currUser);
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    loading,
    googleSignIn,
    userSignOut
  };
  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
