import React from 'react';
import Navbar from '../Navbar/Navbar';
import './Home.scss';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div className="home-container">
            <div className="home-contents">
                <Navbar/>
                <div className="home-banner">
                    <p>田舎を、次のステージへ</p>
                    <h1>Infusing modernity <br/> with countryside</h1>
                </div>
            </div>
        </div>
    )
}

export default Home;
