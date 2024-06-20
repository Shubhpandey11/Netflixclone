import React from 'react'
import Gap from '../Gap'

const Card1 = () => {
  return (
    <div className='card'>
        <div className='card-center'>
            <div className='text'>
                <h1>Enjoy on your TV</h1>
                <h3>Watch on smart TVs, PlayStation, Xbox, <br /> Chromecast, Apple TV, Blu-ray players and <br /> more.</h3>
            </div>
            <div id='tv' >
                <img src="src/assets/tv.png" alt="" />
                <div id='video1'>
               <video autoPlay muted playsInline loop>
               <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v"type="video/mp4" />
               </video>
                </div>
            </div>
        </div>
        <Gap />
    </div>
  )
}

export default Card1