import React,{useState} from 'react';

export default function Item({id,title,price,img, onaddtocart,ishome,quantity,ondeltocart}) {
  
  const [val,setval]=useState();
  
  const setvalchange=(event)=>{
    setval(event.target.value);
  };
  
  if (ishome==1) {
  return <div class="card cuscard">
          <div class="card-body text-center">
          <img class="card-img-top setimg"  src={img} />
            <p class="card-text">{title}</p>
            <p class="card-text">{price}/-</p>
            <input type='number' className='inpnum' value={val} onChange={setvalchange}></input>
            <button className='btn-primary add' onClick={()=>{
                onaddtocart(val);
                setval(0);
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
                  ondeltocart();
              }}>Delete</button>  
            </div>
          </div>;
  }
}
