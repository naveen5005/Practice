import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

const AuthContext = createContext();

export const AuthProvider =({children}) =>{
    const[users,setUsers] =useState(null);
    const Login =(user)=>{
        setUsers(user)
    }
    const Logout = () =>{
        setUsers(null)
    }
    return <AuthContext.Provider value={{users,Login,Logout}}>{children}</AuthContext.Provider>
};

export const useAuth = ()=>{
    return useContext(AuthContext);
}