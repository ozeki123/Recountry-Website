import React, { useRef, useEffect } from  'react';
import { gsap, Power4 } from 'gsap';
import './About.scss'
import modernHouse from '../../assets/images/modern-house.jpg';

const About = () => {
    let elContainer = [];

    let tl = gsap.timeline();

        useEffect(() => {
            console.log(elContainer)

            tl.from(elContainer, {
                duration: 1,
                delay: 0.5,
                y: 120,
                stagger: 0.1,
                ease: Power4.easeOut
            })
        })
    return (
        <div className="about-container">
            <div className="about-header">
                <h1 ref={(item) => elContainer.push(item)}>About</h1>
            </div>
            <div className="about-contents">
                
                <div className="about-left">
                    <div className="about-title">
                        <div className="rectangle-area">
                            <div className="rectangle" ref={(item) => elContainer.push(item)}></div>
                        </div>
                        <div className="main-text">
                            <div className="main-text-one">
                                <h1 ref={(item) => elContainer.push(item)}>Modern architectural</h1>
                            </div>
                            <div className="main-text-two">
                                <h1 ref={(item) => elContainer.push(item)}>solutions & construction</h1>
                            </div>   
                        </div>
                        
                    </div>
                    <div className="about-text">
                        <div className="about-text-one">
                            <p ref={(item) => elContainer.push(item)}>Recountry はあなたの理想のお家を創造するためにありまあす。</p>
                        </div>
                        <div className="about-text-two">
                            <p ref={(item) => elContainer.push(item)}>田舎とはとても思えないモダンなアイデアを中心として設計しています。</p>
                        </div>
                        <div className="about-text-three">
                            <p ref={(item) => elContainer.push(item)}>とはいえ、お客様の考えは最優先でおり、どのアイデアを取り込む</p>
                        </div>
                        <div className="about-text-four">
                            <p ref={(item) => elContainer.push(item)}>のは最終的にお客様の判断となります。</p>
                        </div>
                        <div className="about-text-five">
                            <div className="details" ref={(item) => elContainer.push(item)}>
                                <p>Learn more</p>
                                <button></button>
                            </div>
                        </div>               
                    </div>
                    
                </div>
                <div className="about-right">
                    <img src={modernHouse}/>
                </div>
            </div>
        </div>
    )
}

export default About;
