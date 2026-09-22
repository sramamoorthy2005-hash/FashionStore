import React from 'react'
import { useParams } from 'react-router-dom'

const Cartpage = () => {
    const {setCart} = useParams();
    const {cart} = useParams();
    console.log(typeof(setCart));
    console.log(cart)
  return (
    <div>Cartpage</div>
  )
}

export default Cartpage