import React from 'react'
import Header from '../Header'
import { Toaster } from 'react-hot-toast'

const NetflixSignUp = () => {
  return (
    <>
      {/* <Header /> */}
      <div><Toaster/></div>
    <div className='signIn'>
        <div className='signInBox'>
            <form action="" className=''>
                <h1>sign in</h1>
                <input type="email" placeholder='Email address'/>
                <br />
                <input type="password" placeholder='password' />
                <button className='btns'>Sign In</button>
                <h2>OR</h2>
                <button className='btns' style={{backgroundColor: "#5E5E5E"}}>use a sign-in code</button>
                <h2><a href="">forget password?</a></h2>
                remember me
                <input type="checkbox" />
                <div style={{display:"flex", marginTop:'1vw'}}>
                <h3 style={{fontSize:'1.2rem',marginRight:'1vw'}}>new to  netflix ?</h3>
                <h3 style={{fontSize:'1.2rem',marginRight:'1vw'}}><a href="">sign up now</a></h3>
                </div>
            </form>
        </div>
    </div>
    </>
  )
}

export default NetflixSignUp