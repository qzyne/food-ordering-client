import {React, useEffect, useState} from 'react';
import {fetchAllMenus} from '../services/MenuService';
import '../style/MenuClient.css';
import Cart from './Cart';

import Header from '../components/Header';
import { postCart, getCart } from '../services/CartService';

const MenuClient = () => {
    const [listMenu, setMenu] = useState([]);

    const [isShowCart, setIsShowCart] = useState(false);

    useEffect(() => {
        getMenu();
    }, [])

    const getMenu = async () => {
        let res = await fetchAllMenus();
        setMenu(res.data.data);
        //console.log(listMenu[1])
    }

    const handleAddToCart = async (product) => {
        // console.log(product);
        if (window.localStorage.getItem('userId') !== null) {

            var res = await postCart(product.id,Number(window.localStorage.getItem('userId')), 1);
            if(res){
            
                alert('Add successfully!');
                console.log(res.data);
            }
        }
        else {
            window.location.href = '/login';
        }

    }
    

    return (
        <>        
            <Header setIsShowCart = {setIsShowCart}/>
            {!isShowCart && <>
                <div className='main-content'>
                        {
                            listMenu.map((item, index) => item.isActive === 1 ? (
                                <>
                                    <div key = {index} className='categoryName'>{item.menuName}</div>    
                                    <div className='container'>

                                        <div className='row'>
                                            {
                                                item.products.map((a, b) => a.isActive === 1 ? (
                                                    
                                                <div className='product col-3 mx-5 my-2'>
                                                    <div className='text-center'><img className='imgProduct' src= {`http://localhost:5143/images/${a.imagePath}`} alt={a.productName}/></div>
                                                    <div className='text-center'>{a.productName}</div>
                                                    <div className='text-center'>
                                                        {a.price.toLocaleString('it-IT', {style : 'currency', currency : 'VND'})}
                                                    </div>
                                                    <div className='text-center p-2'>   
                                                        <button className='addbtn p-1 px-4' onClick={() => handleAddToCart(a)}>Add</button>
                                                    </div>
                                                </div>
                                                ) : null)
                                            }
                                        </div>
                                    
                                    </div>         
                                </>

                            ) : null)
                        } 
                </div>
            </>}
            {isShowCart && <Cart setIsShowCart = {setIsShowCart}/>}
        </>   
    );
};

export default MenuClient;