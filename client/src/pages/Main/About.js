import React from 'react';

import Drawer from '../../components/Navigation/Drawer';
import Jumbotron from '../../components/About/Jumbotron';
import HighSchool from '../../components/About/HighSchool';
import Photography from '../../components/About/Photography';
import GeneralContracting from '../../components/About/GeneralContracting';
import Hawaii from '../../components/About/Hawaii';
import BootCamp from '../../components/About/BootCamp';


function About() {

    return (
        <div className="container-fluid marg colp">
            <div className="row marg colp">
                <div className="col-12 marg colp">
                    <Drawer />
                </div>
            </div>
            <div className="row marg colp">
                <div className="col-12 marg colp">
                    <Jumbotron />
                </div>
            </div>
            <div className="row marg colp">
                <div className="col-12 marg colp">
                    <HighSchool />
                </div>
            </div>
            <div className="row marg colp">
                <div className="col-12 marg colp">
                    <Photography />
                </div>
            </div>
            <div className="row marg colp">
                <div className="col-12 marg colp">
                    <GeneralContracting />
                </div>
            </div>
            <div className="row marg colp">
                <div className="col-12 marg colp">
                    <Hawaii />
                </div>
            </div>
            <div className="row marg colp">
                <div className="col-12 marg colp">
                    <BootCamp />
                </div>
            </div>
        </div>
    );
}

export default About;