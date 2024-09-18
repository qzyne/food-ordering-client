import {React, useState, useEffect} from 'react';
import Header from '../components/Header';
import { getCart } from '../services/CartService';
import {checkOut} from '../services/CartService';
import '../style/Cart.css';

const CheckOut = () => {
    const [cart, setCart] = useState([]);
    const [checkout, setCheckout] = useState([]);
    const [customerName,setCustomerName] = useState("");
    const [customerPhone,setCustomerPhone] = useState("");
    const [customerAddress,setCustomerAddress] = useState("");
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

    const SubmitCheckout = async (e) => {
        e.preventDefault();
        const info = {
            customerName : customerName,
            customerPhone : customerPhone,
            customerAddress : customerAddress
        };
        const jsonInfo = JSON.stringify(info);
        
        var res = await checkOut(Number(window.localStorage.getItem("userId")),jsonInfo);
        if(res){
            console.log(res.data);
            alert("Order Successfully!")
            window.location.href = "/MenuClient";
        }
    }
    return (
        <div>
            <Header/>    
            <br/>  
                <h1>Check out</h1>
            <div className='main-content d-flex'>
                <div className='col-3'>
                    <form>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Name</label>
                        <input type="text" class="form-control" 
                        placeholder="Enter name"
                            value={customerName} onChange={(e) => setCustomerName(e.target.value)}
                        />
                    
                    </div>
                    <br/>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Address</label>
                        <input type="text" class="form-control" placeholder="Address"
                            value={customerAddress} onChange={(e) => setCustomerAddress(e.target.value)}
                        />
                    </div>
                    <br/>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Phone number</label>
                        <input type="text" class="form-control" placeholder="Phone number"
                            value={customerPhone} onChange={(e) => setCustomerPhone(e.target.value)}
                        />
                    </div>

                    <br/>
                    </form>                    
                    <button class="btn btn-primary" onClick={SubmitCheckout}>Submit</button>
                </div>
                <div className='col-8'>
                <table className='table border border-secondary mt-4'>
                        <thead>
                            <tr>
                                <th>Product name</th>
                                <th className='text-center'>Image</th>
                                <th className='text-center'>Price</th>
                                <th className='text-center'>Quantity</th>
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
                            >{item.quantity}</span>
                        </td>
                    </tr>
                    )
                })

                }
                </tbody>
                </table>
                <div>Total Price: {total.toLocaleString('it-IT', {style : 'currency', currency : 'VND'})} </div>
                </div>
              
            </div>   
        </div>
    );
};

export default CheckOut;