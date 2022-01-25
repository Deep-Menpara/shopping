import React,{useState} from 'react';
import '../css/Item.css';
export default function HomeItem({title,price,img, onChangeQuantity,quantity}) {

    const [val,setVal]=useState(quantity);
  
    const setValChange=(event)=>{
        setVal(parseInt(event.target.value));
    };
    const decrementQuantity=()=>{
        if (val>0) {
        setVal((val-1));
        onChangeQuantity(val-1);
        }
    
    };
    const incrementQuantity=()=>{
        setVal((val+1));
        onChangeQuantity(val+1);
    };


  return <div className="card cuscard">
    <div className="card-body text-center">
    <img className="card-img-top setimg"  src={img} />
    <p className="card-text">{title}</p>
    <p className="card-text">Price: {price}/-</p>
    <button className='hidebutton'><span className="material-icons icon" onClick={decrementQuantity}>remove_circle_outline</span></button>
    <input type='number' className='inpnum' min={0} value={val} onChange={setValChange} disabled></input>
    <button className='hidebutton'><span className="material-icons icon" onClick={incrementQuantity}>add_circle_outline</span></button>
    
  </div>
</div>;
}
