import React from 'react';
import '../css/Home.css';
import '../css/Cart.css';
import CartItem from './CartItem';
export default function Cart({cartarr,setCartArr}) {
    const deleteFromCart=(id)=>{
        setCartArr((oldarr)=>{
            return oldarr.filter((item,index)=>{
                return item.id !== id;
            });
        });
    };
  return <>
            <div className="container cuscon">
              <div className="card-columns">
                  { 
                    cartarr.map((item)=>
                    {
                      return <CartItem  {...item} onDelFromCart={
                        ()=>{
                          deleteFromCart(item.id);
                        }
                      }></CartItem>;
                    })
                  }
              </div>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <center>
              <span className='spann'>Cart Total: {cartarr.reduce((total,item)=>{
                  return total+(parseInt(item.quantity)*parseInt(item.price));
                },0)}/- <br></br> 
              </span>
              <span className='spann'>Items: {cartarr.reduce((total)=>{
                  return total=total+1;
                },0)}
              </span>
            </center>
  </>;
}
