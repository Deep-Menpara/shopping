import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';
import { Products } from './components/Products';
import Item from './components/Item';
function App() {
  
  const [cartarr,setCartArr]=useState([]);
  const [ishome,setIsHome]=useState(true);
  const [searchitem,setSearch]=useState("");
  const [productarr,setProductArr]=useState(Products);
  
  const setSearchChange=(event)=>{
    setSearch(event.target.value);
  };
  
  const loadCart=()=>{
    setIsHome(false);
  };
  
  const loadHome=()=>{
    setIsHome(true);
  };
  
  const deleteFromCart=(id)=>{
      setCartArr((oldarr)=>{
      return oldarr.filter((item,index)=>{
          return item.id !== id;
      });
  });
  };

  const addToCart=(id,title,price,val,img)=>{
    if(parseInt(val)>0)
    {
      let found=false;
      setCartArr((oldarr)=>{
        return oldarr.map((item)=>{
            if(item.id==id)
            {
                found=1;
                item.quantity=parseInt(item.quantity)+parseInt(val);
            }
            return item;
        });
    });
    if(!found)
    {
        setCartArr((oldarr)=>{
            const obj={id:id,title:title,price:price,img:img,quantity:val}
            return [...oldarr,obj]
        });
    }
    }
  };

  if(ishome)
  {
    return (
      <>
         <button className='btnn cart' onClick={loadCart}  ><span class="material-icons carticon">
shopping_cart 
</span><span className='cartitems'>{cartarr.reduce((total)=>{
              return total=total+1;
            },0)}</span></button>
<input className='inp' id="search" name="search" type="text" onChange={setSearchChange} placeholder="What're we looking for ?"/><input className='inp' id="search_submit" type="submit"/>
        <div class="container cuscon" >

          <div class="card-columns">
            {
              productarr.filter((item)=>{
              if (searchitem=="") {
                return item;
              }
              else if (item.title.toLowerCase().includes(searchitem.toLowerCase())) {
                return item;
              }
            }).map((item)=>{
                return <Item key={item.id} {...item} ishome={1} onAddToCart={(val)=>{addToCart(item.id,item.title,item.price,val,item.img);}}></Item>;})
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
      <button  className='btnn home'   onClick={loadHome}><span class="material-icons">
house
</span>  </button>
        <div class="container cuscon">

        <div class="card-columns">
        {
          cartarr.map((item)=>
          {
            return <Item key={item.id} ishome={0} {...item} onDelFromCart={
              ()=>{
                deleteFromCart(item.id);
              }
            }></Item>;
          })
        }
        </div>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <center><span className='spann'>Cart Total: {cartarr.reduce((total,item)=>{
              return total+(parseInt(item.quantity)*parseInt(item.price));
            },0)}/- <br></br> </span>
            <span className='spann'>Items: {cartarr.reduce((total)=>{
              return total=total+1;
            },0)}</span>
        </center>
      </>
    );
  }
}
export default App;
