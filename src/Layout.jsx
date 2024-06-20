import React from 'react'
import Home from './components/Home'
import Card1 from './components/card1/Card1'
import Card2 from './components/card2/Card2'
import Card3 from './components/card3/Card3'
import Queries from './components/queries/Queries'
import NetflixSignUp from './components/signIn/NetflixSignUp'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'

const Layout = () => {
    return (
        <>
            <Home />
            <Card1 />
            <Card2 />
            <Card3 />
            <Queries />
        </>
    )
}

export default Layout