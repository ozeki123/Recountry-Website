import React, { useRef, useEffect } from  'react';
import { gsap, Power3 } from 'gsap';

import Navbar from '../Navbar/Navbar';
import './Home.scss';
import Footer from '../Footer/Footer';

const Home = () => {

    let textContainer = []

    // const textFirst = primaryTextSecond.children[0].children[0]

    let tl = gsap.timeline()

        useEffect(() => {

            console.log(textContainer)

            tl.from(textContainer, {
                duration: 1,
                y: 50,
                stagger: 0.3,
                ease: Power3.easeOut,
                opacity: 0,
            })

        })

    return (
        <div className="home-container">
            <div className="home-contents">
                <Navbar/>
                <div className="home-banner">
                    <div className="text"  ref={(text) => textContainer.push(text)}>
                        <p>田舎を、次のステージへ</p>
                    </div>
                    <div className="text">
                        <h1 className="primary" ref={(primary) => textContainer.push(primary)}>Infusing modernity</h1>
                        <h1 className="primary" ref={(primary) => textContainer.push(primary)}>with countryside</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;
