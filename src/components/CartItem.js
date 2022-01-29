import React from 'react';
import '../css/Item.css';
export default function CartItem({title,price,img,quantity,onDelFromCart}) {
    
  return <div className="card cuscard">
            <div className="card-body text-center">
                <img className="card-img-top setimg" alt='img' src={img} />
                <p className="card-text">{title}</p>
                <p className="card-text">Price: {price}/-</p>
                <p className="card-text">Quantity: {quantity}</p>
                <button className='btn-primary add' onClick={()=>{
                    onDelFromCart();
                }}>
                    <span className="material-icons">delete_outline</span>
                </button>  
            </div>
        </div>;
}
