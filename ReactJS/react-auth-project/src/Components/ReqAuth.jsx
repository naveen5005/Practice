import React from 'react'
import { Navigate } from 'react-router-dom';
import { useAuth } from './Auth'

const ReqAuth = ({children}) => {
    console.log(children)

    const auth = useAuth();

    if(!auth.users){
        return <Navigate to={"/login"}/>
    }

    return children;
}

export default ReqAuth
