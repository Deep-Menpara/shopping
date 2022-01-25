import './App.css';
import React,{useState,useEffect} from 'react';
import Cart from './components/Cart';
import Home from './components/Home';
import HomeBtn from './components/HomeBtn';
import CartBtn from './components/CartBtn';
import Search from './components/Search';
function App() {
  
  const getLocalData=()=>{
      const data=localStorage.getItem("cartdata");
      if (data) {

          return JSON.parse(data);
      }
      else
      {
        return [];
      }
  };

  const [cartarr,setCartArr]=useState(getLocalData());
  const [ishome,setIsHome]=useState(true);
  const [searchitem,setSearch]=useState("");
  
  useEffect(()=>{
    localStorage.setItem('cartdata',JSON.stringify(cartarr))
  },[cartarr]);
  
  const loadCart=()=>{
    setIsHome(false);
  };
  
  const loadHome=()=>{
    setIsHome(true);
  };
  
  const setSearchChange=(event)=>{
    setSearch(event.target.value);
  };

  if(ishome)
  {
    return (
      <>
      
        <CartBtn cartarr={cartarr} loadCart={loadCart}></CartBtn>
        <Search setSearchChange={setSearchChange}></Search>
        <Home  cartarr={cartarr} setCartArr={setCartArr} searchitem={searchitem}></Home>
      </>
    );
  }
  else
  {
    return (
      <>
        <HomeBtn loadHome={loadHome}></HomeBtn>
        <Cart cartarr={cartarr} setCartArr={setCartArr}></Cart>
      </>
    );
  }
}
export default App;
