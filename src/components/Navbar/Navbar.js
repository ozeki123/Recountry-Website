import React from 'react'
import './Navbar.scss';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="nav-container">
            <ul>
                <div className="nav-left">
                    <li><Link className="nav-link" to="/">Recountry</Link></li>
                    <li><Link className="nav-link" to="/">Home</Link></li>
                    <li>About</li>
                </div>
                <div className="nav-right">
                    <li><Link className="nav-link" to="/">お問い合わせ</Link></li>
                </div>
            </ul>
        </div>
    )
}

export default Navbar;