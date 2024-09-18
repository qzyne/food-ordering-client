import axios from "axios";
import React from 'react';

const getUser = () => {
    return axios.get("http://localhost:5143/api/User", 
        {headers: {'Accept': 'application/json','Content-Type': 'application/json;charset=UTF-8'}}
    );
}

const searchUser = (key) => {
    return axios.get(`http://localhost:5143/api/User/Search?key=${key}`);
} 

const deleteUser = (id) => {
    return axios.delete(`http://localhost:5143/api/User/${id}`)
}
export {getUser, searchUser, deleteUser};