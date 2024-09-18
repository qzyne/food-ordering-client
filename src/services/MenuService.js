import axios from 'axios';

const fetchAllMenus = () => {
    return  axios.get("http://localhost:5143/api/Menu");
}

const deleteMenu = (id) => {
    return axios.delete(`http://localhost:5143/api/Menu/${id}`)
}
const deleteProductMenu = (product) => {
    return axios.delete("http://localhost:5143/api/Menu/Product", product, 
    {headers: {'Accept': 'application/json', 'Content-Type': 'application/json'}});
}

const postMenu = (menu) => {

    return axios.post("http://localhost:5143/api/Menu", menu, {headers: {'Content-Type': 'application/json'}})
}

const editMenu = (id,menu) => {
    return axios.put(`http://localhost:5143/api/Menu/${id}`, menu, {headers: {'Accept': 'application/json','Content-Type': 'application/json;charset=UTF-8'}});
}

const getIdMenu = (id) => {
    return axios.get(`http://localhost:5143/api/Menu/${id}`, id, {headers: {'Accept': 'application/json','Content-Type': 'application/json;charset=UTF-8'}})
}

const postProductMenu = (product) => {
    return axios.post(`http://localhost:5143/api/Menu/Product`, product, 
    {headers: {'Content-Type': 'application/json'}});
}

const searchMenu = (key) => {
    return axios.get(`http://localhost:5143/api/Menu/Search?key=${key}`);
} 

export {fetchAllMenus, deleteMenu, postMenu, editMenu, getIdMenu, postProductMenu, deleteProductMenu, searchMenu};