import React, { use, useState } from 'react'
import products from '../productDetails/Product'
import { useNavigate } from 'react-router-dom'
import { BiCartAlt } from "react-icons/bi";
import { GiHearts } from "react-icons/gi";
import CartBtn from './CartBtn';
const Home = ({cart,setCart}) => {
    const nav = useNavigate();
    const [search,setSearch]=useState('');
    const[like,setLike] =useState(products);

    // const[cart,setCart] = useState([]);
    const handleDetails = (id)=>{
        nav(`/productdetails/${id}`);
    }

    const navCart = ()=>{
        nav(`/cartPage`)
    }
    const filterData = like.filter((item)=>
        item.name.toLowerCase().includes(search.toLowerCase())
    )

    //heart icon
  
   const handlelike = (id)=>{
    setLike((prev)=>
    prev.map((item)=>
     item.id===id ? {...item,isWhishList:!item.isWhishList} : item   
    )
    );
   };

  return (
    <div className='py-10 px-25'>
        <div className='flex justify-between items-center  '>
            <div className='w-32 h-32'><img src="/FashionLogo.png" className='w-full h-full' alt="" /></div>
            <div><input className='py-1 border-2 px-5 rounded-2xl' type="search" value={search} onChange={(e)=>setSearch(e.target.value)} placeholder='Search' /></div>
            <div className='flex items-center'><BiCartAlt onClick={navCart} className='text-4xl'/>
                <div className='w-[1px] h-[22px] border rounded-full p-[14px] flex items-center justify-center text-lg '>{cart.length}</div>
            </div>
        </div>

        <div className='mt-15 grid grid-cols-3 gap-8'>
            {filterData.map((item)=>{
                    
                return(
                <div key={item.id} className='border shadow-xl rounded-xl'>
                        <div className='h-100 p-2 rounded-lg'>
                            <img src={item.image} className='w-full h-full object-cover rounded-xl' alt="" />
                        </div>
                        <div className='flex justify-between p-5'>
                            <h2>{item.name}</h2>
                            <p>Price : {item.price}</p>
                            
                        </div>
                        <div className='flex justify-between px-5'>
                            <p >Category : {item.category}</p>
                            <button onClick={()=>handleDetails(item.id)} className=' bg-orange-200 px-1 rounded-lg  cursor-pointer'>View Details</button>
                        </div>
                        
                        <div className='flex mt-3 items-center justify-between   p-5'>
                            <GiHearts onClick={()=>handlelike(item.id)} className={`text-2xl cursor-pointer ${item.isWhishList ? 'text-red-400' : 'text-black'}`}/>
                            <CartBtn setCart={setCart}  product={item}/>
                            <p>Stock : {item.stock}</p>
                        </div>
                        

                </div>
                
)})}
        </div>
    </div>
  )
}

export default Home