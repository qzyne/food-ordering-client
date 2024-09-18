import React, { useEffect, useState } from 'react';
import '../style/Cart.css';
import {FaRegTrashAlt} from "react-icons/fa";
import { getCart, deleteProduct } from '../services/CartService';
import { CiEdit } from "react-icons/ci";
import EditProductClient from "../components/EditProductClient";
import {Link} from 'react-router-dom';

const Cart = (props) => {
    const {setIsShowCart} = props;
    const [cart, setCart] = useState([]);
    const [showEditProduct, setShowEditProduct] = useState(false);
    const [dataProductEdit, setDataProductEdit] = useState({});
    var total = 0;

    useEffect(() =>{
        getCartItem();
    },[])
    const getCartItem = async () =>{
        var res = await getCart(Number(window.localStorage.getItem("userId")));
        // console.log(res.data);
        if(res){
            setCart(res.data);
        }
    }
    const onCloseCart = () => {
        setIsShowCart(false);
    }
    
    const handleEditProduct = async (product) => {
        setShowEditProduct(true);
        setDataProductEdit(product)
    }

    
    const handleCloseEditProduct = () => {
        setShowEditProduct(false)
    }

    const handleDeleteProduct = async (id) => { 
        let res = await deleteProduct(window.localStorage.getItem('userId'),id);
        if(res) {
            console.log(">>> Delete: ",res);
            window.location.reload();
        }
    }
    
    return (
        <div className='main-content'>
            <h1>Cart</h1>
            <table className='table border border-secondary mt-4'>
                    <thead>
                        <tr>
                            <th>Product name</th>
                            <th className='text-center'>Image</th>
                            <th className='text-center'>Price</th>
                            <th className='text-center'>Quantity</th>
                            <th className='text-center'>Action</th>
                        </tr>
                    </thead>
            <tbody>
            {
                cart.map((item, index) => {
                    { total += Number(item.totalPrice)}
                    return (
                    <tr key = {`cart-${index}`}>
                        <td>{item.product.productName}</td>
                        <td className='text-center'><img width= {'50px'} src= {`http://localhost:5143/images/${item.product.imagePath}`} alt={item.productName}/></td>
                        <td className='text-center'>{item.totalPrice.toLocaleString('it-IT', {style : 'currency', currency : 'VND'})}</td>
                        <td className='text-center '>
                            <span 
                                type='text' className='quantity px-1 text-center' 
                            >{item.quantity} &nbsp;<CiEdit onClick= {() => handleEditProduct(item)} className='iconEdit'/></span>
                        </td>
                        <td className='text-center'><a onClick={() => handleDeleteProduct(item.id)} className='removeProduct'><FaRegTrashAlt /></a></td>
                    </tr>
                    )
                })

            }
            </tbody>
            </table>
            <div>Total Price: {total.toLocaleString('it-IT', {style : 'currency', currency : 'VND'})} </div>
            <div className='text-center'>
                <button onClick={onCloseCart} className='addbtn p-1 px-4'>Close</button>
                <Link to= "/Checkout"><button className='addbtn p-1 px-4 mx-2'>Check out</button></Link>
            </div>
            <EditProductClient
                    show = {showEditProduct}
                    handleClose= {handleCloseEditProduct}
                    dataProductEdit = {dataProductEdit}
                />
        </div>
        
    );
};

export default Cart;