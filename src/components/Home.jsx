import React from 'react';
import '../css/home.css'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
      <>
     <div className="home-page">
         <div className="home">
             <div className="navbar">
             <ul>
                 <li><a href="/home">Home</a></li>
                 <li><a href="#">Dashboard</a></li>
                 <li ><a href="/">Logout</a></li>
             </ul>
             </div>
             </div>
        <div className="center">
          <h1>  Welcome To Team </h1>
        </div>
         
        
     </div>
    
      </>
  )
};

export default Home;
