import { createContext, useEffect, useState } from "react";
import { app } from "../firebase/firebase.config";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

// firebase con
export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const gitProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
  // state
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  /////////////////////
  // authentication///
  //register user
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //login user
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      return unsubscribe();
    };
  }, []);

  // google login
  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  // git login
  const signInWithGit = () => {
    setLoading(true);
    return signInWithPopup(auth, gitProvider);
  };
  // logout
  const signOutLog = () => {
      setLoading(true);
      return signOut(auth);
    };

  //////////////////////////////////
  // all auth sent in authContext//
  const authInfo = {
    user,
    loading,
    signIn,
    createUser,
    signInWithGoogle,
    signInWithGit,
    signOutLog
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
