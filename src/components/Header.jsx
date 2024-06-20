import React from 'react'
import toast from 'react-hot-toast'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <header className='header'>
                <div id='logo'>
                    <img src="src\assets\Netflix_Logo_RGB.png" alt="" />
                    {/* <div className='shadow'></div> */}
                </div>
                <div className='nav'>
                    <select name="English" id="drop">
                        <option value="English">English</option>
                        <option value="Hindi">hindi</option>
                    </select>
                    <div className='btn'>
                        <Link to="/signIn" onClick={() => {
                            toast.success('redirection on sign In page is completed', {
                                style: {
                                    border: '1px solid #713200',
                                    padding: '16px',
                                    color: '#713200',
                                    animationDuration: ["5s"]
                                },
                                iconTheme: {
                                    primary: '#713200',
                                    secondary: '#FFFAEE',
                                },
                            });
                        }}><button className='but'>sign in</button></Link>
                    </div>
                </div>
            </header>
            <div className='shadow'></div>
        </div>
    )
}

export default Header