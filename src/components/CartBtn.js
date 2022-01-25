import React from 'react';
import '../css/CartBtn.css';

export default function CartBtn({loadCart,cartarr}) {
  return <>
  <button className='btnn cart' onClick={loadCart}>
         <span className="material-icons carticon">shopping_cart </span>
         <span className='cartitems'>{cartarr.reduce((total)=>{return total=total+1;},0)}</span>
         </button>
</>;
}
