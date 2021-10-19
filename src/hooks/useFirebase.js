import React, { useEffect, useState } from 'react';
import initializeAuthentication from '../Firebase/firebase.init';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

initializeAuthentication();

const useFirebase = () => {
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLogin, setIsLogin] = useState(false);

    const registerNewUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
        .then((result) => {
          const user = result.user;
          console.log(user);
          setError('');
        })
    
        .catch((error) => {
          setError(error.message);
        });
      }


      const processLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
        .then((result) => {
          const user = result.user;
          console.log(user);
          setError('');
        })
        .catch((error) => {
          setError(error.message);
        });
      }


    const signInUsingGoogle = () => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)

        .then((result) => {
            setUser(result.user);
        })
        
        .finally(() => setIsLoading(false));
        
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user);
            } 
            else {
                setUser({});
            }
            setIsLoading(false);
          });
    },[])

    const logOut = () => {
        signOut(auth).then(() => {
            setUser({});
          })
          .finally(() => setIsLoading(false))
    }

    return {
        signInUsingGoogle,
        user,
        error,
        setError,
        logOut,
        isLoading,
        email,
        setEmail,
        password,
        setPassword,
        isLogin,
        setIsLogin,
        registerNewUser,
        processLogin,


    }
        
};

export default useFirebase;