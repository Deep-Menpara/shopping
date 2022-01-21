import logo from './logo.svg';
import './App.css';

import React,{useState} from 'react';
import { Products } from './components/Products';
import Item from './components/Item';

function App() {
  const [cartarr,setcartarr]=useState([]);
  const [ishome,setText]=useState("true");
  const [productarr,setproductarr]=useState(Products);
  const loadcart=()=>{
    setText("false");
  };
  const loadhome=()=>{
    setText("true");
  };

  const addtocart=(id,title,price,val,img)=>{
    let found=0;
    console.log(`${id}   ${title}   ${val}`);
    setcartarr((oldarr)=>{
        return oldarr.map((item)=>{
            if(item.cid==id)
            {
                found=1;
                item.cquantity+=val;
                
            }
            return item;
        });
    });

    if(found==0)
    {
        setcartarr((oldarr)=>{
            const obj={cid:id,ctitle:title,cprice:price,cimg:img,cquantity:val}
            return [...oldarr,obj]
        });
    }
    

  };

  if(ishome=="true")
  {
    return (
      <>
        


        <button className='btn' onClick={loadcart}  >Cart</button>
        


        <div class="container">
        
  <div class="card-columns">


  {
    productarr.map((item)=>
    {
      return <Item key={item.id} {...item} onaddtocart={(val)=>{
        addtocart(item.id,item.title,item.price,val,item.img);
      }}></Item>;
    })
  }

    




    





  </div>
</div>








        
      </>
    );
  }
  else
  {
    return (
      <>
        <button  className='btn'  onClick={loadhome}>Home</button>
      
      </>
    );
  }


}

export default App;
