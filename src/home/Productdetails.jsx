import React from 'react'
import { useParams } from 'react-router-dom'
import products from '../productDetails/Product';
const Productdetails = () => {
    const {id}=useParams();
    
    const product = products.find((item)=>item.id===Number(id));
    console.log(product);
  return (
    <div>
        <p>{product.name}</p>
    </div>
  )
}

export default Productdetails