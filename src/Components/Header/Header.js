import React from 'react'
import './Header.css' 

 
 const header = () => (
  <div className="nav">
    <div>Home</div>
    <div>sign in</div>
    <div>News</div>
    <div>Sports</div>
    <div>Weather</div>
    <div>Health</div>
    <div>Business</div>
    <div>عربي</div>
    {/* <div><i class="fa fa-search" aria-hidden="true"></i></div> */}
    <div><input type="search" placeholder="Search" /> <i className="fa fa-search" aria-hidden="true"></i></div>
  <div></div>
  </div>
 );
 export default header;