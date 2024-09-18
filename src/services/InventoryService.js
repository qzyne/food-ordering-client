import axios from 'axios';

const fetchAllProducts = () => {
    return  axios.get("http://localhost:5143/api/Product");
}


const postProduct = (product) => {

    return axios.post(`http://localhost:5143/api/Product`, product)
}

const deleteProduct = (id) => {
    return axios.delete(`http://localhost:5143/api/Product/${id}`)
}

const editProduct = (id,product) => {
    return axios.put(`http://localhost:5143/api/Product/${id}`, product, {headers: {'Accept': 'application/json','Content-Type': 'application/json;charset=UTF-8'}});
}

const searchProduct = (key) => {
    return axios.get(`http://localhost:5143/api/Product/Search?key=${key}`);
} 

export {fetchAllProducts, postProduct, deleteProduct, editProduct, searchProduct};
