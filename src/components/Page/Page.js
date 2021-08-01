import React from 'react'
import './Page.scss'
import Home from '../Home/Home'
import About from '../About/About'

const Page = () => {
    return (
        <div className="container">
            <Home/>
            <About/>
        </div>
    )
}

export default Page;