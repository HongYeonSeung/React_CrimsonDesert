import React from 'react'

function TopYoutube() {
  return (
    <div className='youtube'>
        <div className='youtube-cover'></div>
        <video muted autoPlay loop width="100%" height="100%" >
            <source src='./videos/crimsondesert.mp4' type='video/mp4'></source>
        </video>
 
        <div className='topYoutube-logo'>
            <img src='./assets/logo1.png' alt='로고2' ></img>
        </div>
    </div>
  )
}

export default TopYoutube