import React from 'react';
import { Outlet } from 'react-router-dom';

const AuthenLayout = () => {
    if(window.localStorage.getItem("userId") == null) {
        if(window.location.pathname === "/Login" ){
            window.location.href = "/Login";
        }
        if(window.location.pathname === "/Register"){
            window.location.href = "/Register";
        }
    
    }
    return (
        <Outlet/>
    );
};

export default AuthenLayout;