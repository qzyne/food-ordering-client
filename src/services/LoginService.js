import React from 'react';
import axios from 'axios';

const Login = (login) => {
    return axios.post(
        "http://localhost:5143/api/Auth/Login", login, 
        {headers: {'Accept': 'application/json','Content-Type': 'application/json;charset=UTF-8'}}
    );
}

const RegisterNew = (register) => {
    return axios.post("http://localhost:5143/api/Auth/Register", register, 
    {headers: {'Accept': 'application/json','Content-Type': 'application/json;charset=UTF-8'}}
)};

export {Login, RegisterNew};