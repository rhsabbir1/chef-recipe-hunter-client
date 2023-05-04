import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';

const auth = getAuth(app);
export const AuthContex = createContext(null)

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)


    const registation = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const profail = (name, photoUrl) => {
        updateProfile(user, {
            displayName: {name}, photoURL: {photoUrl}
        })
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, getUser => {
            setUser(getUser)
        })
        return () => {
            unsubscribe()
        }
    }, [])

    const logOut = () => {
        return signOut(auth)
    }


    const authInfo = {
        registation,
        login,
        user,
        logOut,
        profail
    }
    return (
        <AuthContex.Provider value={authInfo}>
            {children}
        </AuthContex.Provider>


    );
};

export default AuthProvider;