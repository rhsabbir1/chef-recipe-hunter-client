import React, { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from '../firebase/firebase.config';

const auth = getAuth(app);
export const AuthContex = createContext(null)

const AuthProvider = ({ children }) => {

    const registation =(email , password)=>{
        return createUserWithEmailAndPassword(auth , email , password)
    }

    const authInfo={
        registation
    }
    return (
        <AuthContex.Provider value={authInfo}>
            {children}
        </AuthContex.Provider>


    );
};

export default AuthProvider;