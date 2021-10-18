import React, { useEffect, useState } from 'react';
import initializeAuthentication from '../Firebase/firebase.init';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";

initializeAuthentication();

const useFirebase = () => {
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const [user, setUser] = useState({});
    const [error, setError] = useState('');

    const signInUsingGoogle = () => {
        signInWithPopup(auth, googleProvider)

        .then((result) => {
            setUser(result.user);
        })

        .catch((error) => {  
            setError(error.message);
        });
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user);
            } 
            else {

            }
          });
    },[])

    const logOut = () => {
        signOut(auth).then(() => {
            setUser({});
          })
          .catch((error) => {
            // An error happened.
          });
    }

    return {
        signInUsingGoogle,
        user,
        error,
        logOut,

    }
        
};

export default useFirebase;