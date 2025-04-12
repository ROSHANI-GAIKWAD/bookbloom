import React from 'react'
import React, { createContext,useContext,useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';

export const AutoContext=createContext();

export default  function AutoProvider({children}){
    const intialAuthUser=localStorage.getItem("Users");
    const[authUser,setAuthUser]=userState(
        intialAuthUser? JSON.parse(intialAuthUser) :undefined
    );
    return (
        <AuthContext.Provider value={[{authUser,setAuthUser}]}>
            {children}
        </AuthContext.Provider>
    );

}
export const useAuth=()=>useContext(AuthContext);
