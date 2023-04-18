import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../../../firebase.config'

export const AuthContext = createContext(null)
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)

    // Create a new User!!
    const createUser =(email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password) 
    }  

    // Sing in the created user!!
    const singIn = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    // Sing out the user!! 
    const logOut = () =>{
        return signOut(auth) 
    }

    // observer for user..
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
        });
        
        // unmounting for user attendance
        return () =>{
            return unsubscribe();
        }
    },[])
        
    const authData = {
        user,
        createUser,
        singIn,
        logOut
    };


    return (
        <AuthContext.Provider value={authData}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;