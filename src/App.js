import React from 'react'
import './App.css';
import Topheader from './components/topheader.js';
import Badge from './components/Badge.js';
import TopYoutube from './components/topYoutube.js';
import Worldview from './components/worldview.js';
import MidClass from './components/MidClass.js';
import News from './components/News.js';
import Footer from './components/Footer.js';

function App() {
  return (
    <div className='app'>
      <div className='app-box'>
        <div><Topheader></Topheader></div>
        <div><Badge></Badge></div>
        <div><TopYoutube></TopYoutube></div>
        <div><Worldview></Worldview></div>
        <div><MidClass></MidClass></div>
        <div><News></News></div>   
        <div><Footer></Footer></div> 
      </div>  
      
    </div>
  )
}

export default App