import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';
import { GoogleAuthProvider,GithubAuthProvider } from "firebase/auth";


const auth = getAuth(app);
export const AuthContex = createContext(null)

const AuthProvider = ({ children }) => {
    const provider = new GoogleAuthProvider();
    

    const githubProvider = new GithubAuthProvider();

    const [user, setUser] = useState(null)
    const [loader , setLoader] = useState(true)



    const registation = (email, password) => {
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const login = (email, password) => {
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const profail = (name, photoUrl) => {
        updateProfile(auth.currentUser, {
            displayName:name,photoURL:photoUrl
        })
    }

    const emailSingIn = ()=>{
        setLoader(true)
        return signInWithPopup(auth ,provider)
    }

    const gitHubsingIng = ()=>{
       return signInWithPopup(auth, githubProvider)
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, getUser => {
            setUser(getUser)
            setLoader(false)
        })
        return () => {
            unsubscribe()
        }
    }, [])

    const logOut = () => {
        setLoader(true)
        return signOut(auth)
    }


    const authInfo = {
        registation,
        login,
        user,
        logOut,
        profail,
        loader,
        emailSingIn,
        gitHubsingIng
    }
    return (
        <AuthContex.Provider value={authInfo}>
            {children}
        </AuthContex.Provider>


    );
};

export default AuthProvider;