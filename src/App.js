
import './App.css';
import {Route, Routes, BrowserRouter} from 'react-router-dom';
import LogIn from '../src/Pages/LogIn';
import ForgotPW from '../src/Pages/ForgotPW';
import ChangePW from '../src/Pages/ChangePW';
import ClientLayOut from './ClientLayOut';
import MenuClient from './Pages/MenuClient';
import Cart from './Pages/Cart';
import AuthenLayout from './components/AuthenLayout';
import Register from './Pages/Register';
import CheckOut from './Pages/CheckOut';

function App() {



  return (
      <BrowserRouter>
        <Routes>
            <Route path='' element={<ClientLayOut/>}>
              <Route path='/MenuClient' element={<MenuClient/>}></Route>
              <Route path='/Checkout' element={<CheckOut/>}></Route>
            </Route>
            <Route path='/Login' element={<LogIn/>}/>
            <Route path="/Register" element={<Register/>}/>
        </Routes>
      </BrowserRouter>
  );
}


export default App;
