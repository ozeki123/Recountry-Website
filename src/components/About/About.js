import React, { useRef, useEffect } from  'react';
import { gsap, Power2, Power4 } from 'gsap';
import './About.scss'
import modernHouse from '../../assets/images/modern-house.jpg';
import CSSRulePlugin from 'gsap/CSSRulePlugin';

gsap.registerPlugin(CSSRulePlugin)

const About = () => {
    let elContainer = [];
    let imageRef = useRef(null);
    let imageContainer = [];
    let aboutContainer = useRef(null);
    let imageReveal = CSSRulePlugin.getRule(".about-container .about-contents .about-right:after");
    
    let tl = gsap.timeline();

    useEffect(() => {
        tl.to(aboutContainer, {
            duration: 0.1,
            css:  {visibility: "visible" }
        }).to(imageReveal, {
                duration: 1.7,
                width: "0%",
                ease: Power2.easeOut,
            }).from(imageRef, {
                duration: 1.7,
                scale: 1.3,
                ease: Power2.easeOut,
                delay: -2
            })

        tl.from(elContainer, {
            duration: 1,
            y: 120,
            stagger: 0.1,
            ease: Power4.easeOut
        });

    })
    return (
        <div className="about-container" ref={el => (aboutContainer = el)}>
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
                    <div className="about-image">
                        <img src={modernHouse} ref={el => imageRef = el} alt="a"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;
