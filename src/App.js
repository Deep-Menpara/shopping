import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';
import { Products } from './components/Products';
import Item from './components/Item';
function App() {
  
  const [cartarr,setcartarr]=useState([]);
  const [ishome,setText]=useState("true");
  const [searchitem,setSearch]=useState("");
  const [productarr,setproductarr]=useState(Products);
  
  const setsearchchange=(event)=>{
    console.log("dd");
    setSearch(event.target.value);
  };
  
  const loadcart=()=>{
    setText("false");
  };
  
  const loadhome=()=>{
    setText("true");
  };
  
  const deletetocart=(id)=>{
      setcartarr((oldarr)=>{
      return oldarr.filter((item,index)=>{
          return item.id !== id;
      });
  });
  };

  const addtocart=(id,title,price,val,img)=>{
    if(parseInt(val)>0)
    {
      let found=0;
      setcartarr((oldarr)=>{
        return oldarr.map((item)=>{
            if(item.id==id)
            {
                found=1;
                item.quantity=parseInt(item.quantity)+parseInt(val);
            }
            return item;
        });
    });
    if(found==0)
    {
        setcartarr((oldarr)=>{
            const obj={id:id,title:title,price:price,img:img,quantity:val}
            return [...oldarr,obj]
        });
    }
    }
  };

  if(ishome=="true")
  {
    return (
      <>
        <input className='inp' id="search" name="search" type="text" onChange={setsearchchange} placeholder="What're we looking for ?"/><input className='inp' id="search_submit" type="submit"/>
        <div class="container cuscon" >
          <div className='card'> <button className='btn' onClick={loadcart}  >Goto-> Cart</button>
          </div>
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
                return <Item key={item.id} {...item} ishome={1} onaddtocart={(val)=>{addtocart(item.id,item.title,item.price,val,item.img);}}></Item>;})
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
        <div class="container cuscon">
        <div className='card'>
        <button  className='btn'   onClick={loadhome}>Home  </button>
        </div>
        <div class="card-columns">
        {
          cartarr.map((item)=>
          {
            return <Item key={item.id} ishome={0} {...item} ondeltocart={
              ()=>{
                deletetocart(item.id);
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
            },0)}/-</span>
        </center>
      </>
    );
  }
}
export default App;
