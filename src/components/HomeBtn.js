import React from 'react';
import '../css/HomeBtn.css'
export default function HomeBtn({loadHome}) {
  return <>
    <button  className='btnn home'   onClick={loadHome}><span className="material-icons">house</span></button>
  </>;
}
