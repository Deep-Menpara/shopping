import React,{useState} from 'react';

export default function Item({id,title,price,img, onaddtocart}) {
  const [val,setval]=useState();
  
  const setvalchange=(event)=>{
    setval(event.target.value);
  };
  return <div class="card cuscard">
    
  <div class="card-body text-center">
  <img class="card-img-top setimg"  src={img} />
    <p class="card-text">{title}</p>
    <p class="card-text">{price}/-</p>
    <input type='number' value={val} onChange={setvalchange}></input>
    <button className='btn-primary add' onClick={()=>{
        onaddtocart(val);
        setval(0);
    }}>Add</button>  
  </div>
  
</div>;
}
