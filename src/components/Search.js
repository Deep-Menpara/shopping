import React from 'react';
import '../css/Search.css';
export default function Search({setSearchChange}) {
  return <>
  <input className='inp' type="text" onChange={setSearchChange} placeholder="What're we looking for ?"/><input className='inp'  type="submit"/>
  </>;
}
