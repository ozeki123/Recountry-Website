import React, {useRef, useEffect } from 'react';
import './Navbar.scss';
import { Link } from 'react-router-dom';
import { gsap, Power4 } from 'gsap';

const Navbar = () => {
    let linkContainer = [];

    let tl = gsap.timeline();

        useEffect(() => {
            console.log(linkContainer)

            tl.from(linkContainer, {
                duration: 1,
                x: -100,
                stagger: 0.3,
                ease: "back.out(1.5)",
                opacity: 0,
                delay: 1,
            })
        })

    return (
        <div className="nav-container">
            <ul>
                <div className="nav-left">
                    <li ref={(nav) => linkContainer.push(nav)}><Link className="nav-link" id="logo-text" to="/">RECOUNTRY</Link></li>
                    <li ref={(nav) => linkContainer.push(nav)}><Link className="nav-link" id="link"to="/">Home</Link></li>
                    <li ref={(nav) => linkContainer.push(nav)}><Link className="nav-link" id="link" to="/">About</Link></li>
                </div>
                <div className="nav-right">
                    <li><Link className="nav-link" to="/">お問い合わせ</Link></li>
                </div>
            </ul>
        </div>
    )
}

export default Navbar;