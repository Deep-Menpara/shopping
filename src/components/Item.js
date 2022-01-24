import React,{useState} from 'react';
import '../css/Item.css';
export default function Item({title,price,img, onAddToCart,ishome,quantity,onDelFromCart}) {
  
  const [val,setVal]=useState(0);
  
  const setValChange=(event)=>{
    setVal(parseInt(event.target.value));
  };
  const decrementQuantity=()=>{
    setVal((val-1));
  };
  const incrementQuantity=()=>{
    setVal((val+1));
  };
  
  if (ishome==1) {
  return <div class="card cuscard">
          <div class="card-body text-center">
          <img class="card-img-top setimg"  src={img} />
            <p class="card-text">{title}</p>
            <p class="card-text">{price}/-</p>
            <span class="material-icons icon" onClick={decrementQuantity}>remove_circle_outline</span>
            <input type='number' className='inpnum' value={val} onChange={setValChange}></input>
            <span class="material-icons icon" onClick={incrementQuantity}>add_circle_outline</span>
            <button className='btn-primary add' onClick={()=>{
                onAddToCart(val);
                setVal(0);
            }}>Add</button>  
            
          </div>
        </div>;
  }
  else
  {
    return <div class="card cuscard">
            <div class="card-body text-center">
            <img class="card-img-top setimg"  src={img} />
              <p class="card-text">{title}</p>
              <p class="card-text">{price}/-</p>
              <p class="card-text">{quantity}</p>
              <button className='btn-primary add' onClick={()=>{
                  onDelFromCart();
              }}><span class="material-icons">
              delete_outline
              </span></button>  
            </div>
          </div>;
  }
}
