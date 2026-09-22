import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Login from './Login'
import Home from './home/Home'
import Productdetails from './home/Productdetails'
import Cartpage from './home/Cartpage'

function App() {
  

  return (
    <>
      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/productdetails/:id' element={<Productdetails/>}></Route>
        <Route path='/cartPage/:setCart/:cart' element={<Cartpage/>}></Route>
        
        </Routes>
    </>
  )
}

export default App
