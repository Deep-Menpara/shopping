import React,{useState} from 'react';
import { Products } from './Products';
import '../css/Home.css';
import HomeItem from './HomeItem';
export default function Home({searchitem,cartarr,setCartArr}) {

    const [productarr,setProductArr]=useState(Products);

    const setCartQuantity=(id,title,price,val,img)=>{
    if (val>0) {
        setCartArr((oldarr)=>{
        let found=false;
        let newcart= oldarr.map((item)=>{
            if(item.id==id)
            {
              found=true;
                
                item.quantity=parseInt(val);
            }
            return item;
        });
        if (!found) {
            const obj={id:id,title:title,price:price,img:img,quantity:val}
            return [...oldarr,obj];
        }
        return newcart;
      });
    }
    else
    {
      setCartArr((oldarr)=>{
        return oldarr.filter((item)=>{
          return item.id!=id;
        });
      });
    }
  };
  
  return <>
            <div className="container cuscon" >
            <div className="card-columns">
            {
              productarr.filter((item)=>{
              if (searchitem=="") {
                return item;
              }
              else if (item.title.toLowerCase().includes(searchitem.toLowerCase())) {
                return item;
              }
              }).map((item)=>{
                let quantity=cartarr.reduce((total,cartitem)=>{
                  if (cartitem.id==item.id) {
                    return total+parseInt(cartitem.quantity);
                  }
                  return total;
                },0);
                return <HomeItem  quantity={quantity} {...item} onChangeQuantity={(val)=>{setCartQuantity(item.id,item.title,item.price,val,item.img);}}></HomeItem>;
              })
            }
            </div>
            </div>
  
  </>;
}
