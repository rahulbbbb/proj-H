import React from 'react';
import './home.css';
import ScrollDown from './ScrollDown';

const Home = () => {
    return (
        <section className='home__container' id="home">
     
            <button className='home__cta' onClick={() => alert('Get Started clicked!')}>Get Started</button>
           <div className='home__sta'> <ScrollDown/></div>
    </section>
    );
};

export default Home;