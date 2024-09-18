import axios from 'axios';

const postCart = (productId, userId, quantity) => {
    return axios.post(`http://localhost:5143/api/Cart/Item?productId=${productId}&userId=${userId}&quantity=${quantity}`);
}

const getCart = (id) => {
    return axios.get(`http://localhost:5143/api/Cart/${id}`);
}
const editQuantity = (userId, cartProductId, quantity) => {
    return axios.put(`http://localhost:5143/api/Cart/QuantityCartItem?userId=${userId}&cartProductId=${cartProductId}&quantity=${quantity}`)
}
const deleteProduct = (userId, id) => {
    return axios.delete(`http://localhost:5143/api/Cart/CartItem?userId=${userId}&cartItemId=${id}`)
}

const checkOut = (userId, request) => {
    return axios.post(`http://localhost:5143/api/Cart/Checkout?userId=${userId}`, request, {headers: {'Accept': 'application/json','Content-Type': 'application/json;charset=UTF-8'}});
}
export {postCart, getCart, editQuantity, deleteProduct, checkOut};

