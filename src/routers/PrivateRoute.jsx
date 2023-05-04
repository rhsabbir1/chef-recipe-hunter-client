import React, { useContext } from 'react';
import { AuthContex } from '../provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user }  = useContext(AuthContex)
    const location = useLocation()
    if(user){
        return children;
    }
    return <Navigate state={{from : location}} to="/login" replace></Navigate>;
};

export default PrivateRoute;