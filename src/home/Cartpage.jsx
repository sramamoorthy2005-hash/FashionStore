import React from 'react'
import products from '../productDetails/Product'
import { FaMinus ,FaPlus } from "react-icons/fa";
const Cartpage = ({cart,setCart}) => {
  const handlecartinc = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? {...item, qty: item.qty + 1 } : item
      )
    );
  }
    const handlecartdec = (id)=>{
      setCart((prev)=>
      prev.map((item)=>item.id===id ? {...item,qty:item.qty-1}:item).filter((item)=>item.qty>0)
      );
    }
  
  return (
    <>
      <section className='p-10'>
        <h1 className=' text-4xl font-medium'>Shopping Carts</h1>
        <div className='grid grid-cols-1 gap-5  mt-8 '>
            {cart.map((item)=>(
                <div key={item.id} className='bg-white shadow-xl border rounded-xl   '>
                    <div className='flex '>
                        <div className='w-[250px] h-[250px] p-2 '><img src={item.image} className='w-full h-full object-cover rounded-xl shadow-2xl' alt="" /></div>
                        <div className='p-5 w-full'>
                          <div className='flex justify-between '>
                              <h1 className='text-xl font-bold'>{item.name}</h1>
                              <p>Price : <span className='font-medium'>Rs.{item.price}</span></p>
                          </div>
                          <div className='mt-3 '>
                              <p> <span className='font-medium'>Categort :</span> {item.category}</p>
                              <p className='flex gap-2 mt-5 items-center'>Qty : <button onClick={()=>handlecartdec(item.id)} className='border py-1 px-1 rounded-lg'><FaMinus /></button> {item.qty} <button onClick={()=>handlecartinc(item.id)} className='border py-1 px-1 rounded-lg'><FaPlus /></button></p>
                          </div>
                        </div>
                    </div>
                    
                    
                </div >
            ))}
        </div> 
      </section>
      
    </>
  )
}

export default Cartpage