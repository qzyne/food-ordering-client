import axios from 'axios';

const fetchAllCategories = () => {
    return  axios.get("http://localhost:5143/api/Category");
}

const postCategory = (category) => {
    return axios.post(`http://localhost:5143/api/Category`, category, 
    {headers: {'Content-Type': 'application/json'}});
}

const deleteCategory = (id) => {
    return axios.delete(`http://localhost:5143/api/Category/${id}`)
}

const editCategory = (id,category) => {
    return axios.put(`http://localhost:5143/api/Category/${id}`, category, {headers: {'Accept': 'application/json','Content-Type': 'application/json;charset=UTF-8'}});
}

const getCategoryByID = (id) => {
    return axios.get(`http://localhost:5143/api/Category/${id}`)
}

const searchCategory = (key) => {
    return axios.get(`http://localhost:5143/api/Category/Search?key=${key}`);
} 
export {fetchAllCategories, postCategory, deleteCategory, getCategoryByID, editCategory, searchCategory};