import {React, useState } from 'react';
import imgBG from '../assets/images/MCbg.png';
import '../style/LogIn.css';
import { FaRegEye, FaEyeSlash} from "react-icons/fa"; 
import {RegisterNew} from "../services/LoginService"; 



const Register = () => {
  const [show, setShow] = useState(false);
  const [username, setUsername] = useState();
  const [phonenumber, setPhonenumber] = useState();
  const [password, setPassword] = useState();
  const [cfpassword, setCfPassword] = useState();

  
  // đào true false biên show (click vào thì đổi state)
  const handleShow = () => {
    setShow(!show)
  };

  const handleLogIn = async (e) => {
    e.preventDefault(); 

    const user = {
      username: username,
      password: password,
      phonenumber: phonenumber,
      confirmPassword: cfpassword,

    } 
    
    const jsonLogin = JSON.stringify(user);
    console.log(jsonLogin);
    var res = await RegisterNew(jsonLogin);
    if (res) {
      console.log(res);
      window.location.href=('/Login') 
    }

  }
  return (
    <div className='LogInContainer contain-fluid d-flex'>
          <img className='LogInbg d-none d-lg-block text-center my-auto' src={imgBG} alt='Background'/>
          <div className='loginBox bg-white'>
            <div className='my-5'>
              <h3 className='text-center fw-bolder'>McDonald's - Register</h3>
              <p className='text-center fw-light'>Hello, please enter your information</p>
              <br/>
              {/* form login */}
              <form className='text-center'>
                <span className='phoneNumber'>Username</span><br/>
                <input className='phoneNumberBox p-1 my-2' type='text' 
                  value= {username} onChange={(e) => setUsername(e.target.value)}
                />
                <br/>
                <span className='password'>Password</span><br/>
                <input className='passwordBox p-1 my-2' type={show ? 'text' : 'password'}
                   value={password}  onChange={(e) => setPassword(e.target.value)}
                />
                <div className='iconEye' onClick={handleShow} >{show ? <FaEyeSlash/> : <FaRegEye/>}</div>
                
                <br/>
                <span className='cfpassword'>Confirm Password</span><br/>
                <input className='passwordBox p-1 my-2' type={show ? 'text' : 'password'}
                   value={cfpassword} onChange={(e) => setCfPassword(e.target.value)}
                />
                <div className='iconEye' onClick={handleShow} >{show ? <FaEyeSlash/> : <FaRegEye/>}</div>
                <br/>
                <span className='phone'>Phone Number</span><br/>
                <input className='phoneNumberBox p-1 my-2' type='text' 
                  value= {phonenumber} onChange={(e) => setPhonenumber(e.target.value)}
                />
                <br/>


                <button className='buttonLogIn w-50 p-2 text-white text-center' onClick={handleLogIn}>Done</button>
                <div className='registerNow mt-3 fw-light'>Have a McDonald's account? <a href='/Login' className='fw-bold'>Log in now</a></div>
              </form>
            </div>
          </div>


    </div>
  );
};

export default Register;