import React from 'react';

import face from "./imgProfile.png";

const About =() => {
        return(
            <div id="about" className="row cover">
                <h2 className="text-center">About Me</h2>
                <div className="container">
                    <div className="col-md-12">
                        <img className="img-circle text-center profile-img" src={face} alt="imgProfile" />
                        <h4 className="text-center about-name">Paramest Waewsuwan</h4>
                    </div>
                    <div className="col-md-12">
                        <div className="row">
                            <div className="col-md-6">
                                <p className="text-right"><span className="font-weight-bold">Date of birth : </span></p>
                            </div>
                            <div className="col-md-6">
                                <p className="text-left">7 April 1994</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <p className="text-right"><span className="font-weight-bold">Age : </span></p>
                            </div>
                            <div className="col-md-6">
                                <p className="text-left"> 24 years old</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <p className="text-right"><span className="font-weight-bold">Height / weight : </span></p>
                            </div>
                            <div className="col-md-6">
                                <p className="text-left"> 175cm / 71kgs.</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <p className="text-right"><span className="font-weight-bold">Religion : </span></p>
                            </div>
                            <div className="col-md-6">
                                <p className="text-left"> Buddhist</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <p className="text-right"><span className="font-weight-bold">Personality : </span></p>
                            </div>
                            <div className="col-md-6">
                                <p className="text-left"> Responsible, Friendly</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <p className="text-right"><span className="font-weight-bold">Language : </span></p>
                            </div>
                            <div className="col-md-6">
                                <p className="text-left"> Thai ( Native ) , English ( Intermediate )</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
}

export default About;