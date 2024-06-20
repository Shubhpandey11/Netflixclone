import React from 'react'
import Header from './Header'
import Input from './Input'
import Gap from './Gap'

const Home = () => {
  return (
    <>
    <div id='home'>
        <Header />
        <div id='content'>
          <div>
          <div>
            <h1>Unlimited movies, TV shows and more</h1>
            <h3>Watch anywhere. Cancel anytime.</h3>
            <h3>Ready to watch? Enter your email to create or restart your membership.
            </h3>
          </div>
          <Input />
          </div>
        </div>
    </div>
    <Gap/>
    </>
  )
}

export default Home