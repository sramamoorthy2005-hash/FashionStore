import React from 'react'
import Cartpage from './Cartpage';

const CartBtn = ({setCart,product}) => {
    const handleClick = ()=>{
       setCart((prev)=>{
        let isCart = prev.some((item)=>item.id===product.id);
        if(isCart){
           
            return prev.map((item)=> item.id===product.id ? {...item,qty:item.qty+1} : item);
        }
        return [...prev,{...product,qty:1}]; 
       })
    }
  return (
    <>
    <button onClick={handleClick} className='rounded-lg cursor-pointer py-1 px-4  bg-green-400 hover:bg-green-500 hover:text-white'>Add Cart</button>
    
    </>
    
  )
}

export default CartBtn