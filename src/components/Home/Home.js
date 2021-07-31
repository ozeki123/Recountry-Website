import React, { useRef, useEffect } from  'react';
import { gsap, Power4 } from 'gsap';

import Navbar from '../Navbar/Navbar';
import './Home.scss';
import Footer from '../Footer/Footer';

const Home = () => {

    let textContainer = []

    let tl = gsap.timeline()

        useEffect(() => {

            console.log(textContainer)

            tl.from(textContainer, {
                duration: 1,
                y: 150,
                skewY: 5,
                stagger: 0.3,
                ease: "back.out(0.95)"
            })

        })

    return (
        <div className="home-container">
            <div className="home-contents">
                <Navbar/>
                <div className="home-banner">
                    <div className="text-one" id="row-one">
                        <h1 ref={(text) => textContainer.push(text)}>田舎を、次のステージへ</h1>
                    </div>
                    <div className="text-two" id="primary">
                        <h1 ref={(text) => textContainer.push(text)}>Infusing modernity</h1>
                    </div>
                    <div className="text-three" id="primary">
                        <h1 ref={(text) => textContainer.push(text)}>with countryside</h1>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Home;
