import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Login from './Login'
import Home from './home/Home'
import Productdetails from './home/Productdetails'
import Cartpage from './home/Cartpage'

function App() {
  
  const[cart,setCart] = useState([]);
  return (
    <>
      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/home' element={<Home cart={cart} setCart={setCart}/>} ></Route>
        <Route path='/productdetails/:id' element={<Productdetails/>}></Route>
        <Route path='/cartPage' element={<Cartpage cart={cart} setCart={setCart}/>} ></Route>
        
      </Routes>
    </>
  )
}

export default App
