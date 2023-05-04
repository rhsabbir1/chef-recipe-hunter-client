import React, { useContext } from 'react';
import { AuthContex } from '../provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const PrivateRoute = ({children}) => {
    const {user ,loader }  = useContext(AuthContex)
    const location = useLocation()
    if(loader){
        return <Spinner animation="border" variant="dark" />
    }
    if(user){
        return children;
    }
    return <Navigate state={{from : location}} to="/login" replace></Navigate>;
};

export default PrivateRoute;