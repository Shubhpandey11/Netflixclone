import React from 'react'
import Gap from '../Gap'

const Card2 = () => {
  return (
    <div className='card'>
        <div className='card-center'>
            <div className='card2-container'>
                <img src="src/assets/mobile-0819.jpg" alt="" />
                <div className='download'>
                  <img src="src/assets/boxshot.png" alt="" />
                  <div id='text-download'>
                    <div>stranger Things</div>
                    <div>Downloading...</div>
                  </div>
                  <div data-uia="nmhp-card-animation-asset-custom" aria-hidden="true" className="animate"></div>
                </div>
            </div>
            <div className='text' style={{marginRight: "40px"}}>
                <h1>Download your shows to watch offline</h1>
                <h3>Save your favourites easily and always have something to watch.</h3>
            </div>
        </div>
        <Gap />
    </div>
  )
}

export default Card2