import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { FaShoppingCart } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import '../style/Header.css';
const Header = (props) => {
    const {setIsShowCart} = props;
    const handleShowCart = () => {
        if(window.localStorage.getItem('userId') !== null){
            setIsShowCart(true);
        }else{
            window.location.href = '/login';
        }
    }

    const handleLogOut = () => {
        window.localStorage.removeItem('userId');
        window.location.href = '/Login';
    }
    return (
        <div>
            <Navbar bg='warning'>
                <span className='col-6 text-center'>McDonald's</span>
                <div className='col-6 text-center'>
                    <span className='cart' to='/Cart' onClick={handleShowCart}>Cart &nbsp;<FaShoppingCart className='cart-icon'/></span>
                    <span className='logout mx-5' onClick={handleLogOut}>Log Out &nbsp;<IoMdSettings className='logOutIcon fs-5'/></span>
                </div>
            </Navbar>
        </div>
    );
};

export default Header;
