import React from 'react';
import { Parallax } from 'react-parallax';

function Jumbotron() {

    return (
        <div className="Jumbotron" style={{zIndex: 1}}>
            <Parallax
                bgImage={require('./imgs/xander-ashwell.png')}
                bgImageAlt="Jumbotron"
                strength={200}
            >
                <div style={{height: '400px'}}>
                    <h1>//Web Development</h1>
                </div>
            </Parallax>
        </div>
    );
}

export default Jumbotron;