import React from 'react';
import './About.css';

function About(props) {
    console.log(props);
    return (
        <div className="about_container">
            <span>About this page: I built it because I love movies.</span>
            <span>Hae-Jin LIM</span>
        </div>
    );
}

export default About; 