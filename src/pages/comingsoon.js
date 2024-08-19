import React, { Component } from "react";
import { Row } from "reactstrap";
import { Link } from 'react-router-dom';

import Icon from '../assets/images/logo-icon-64.png';

export default function Comingsoon() {
    return (
        <>
            <section className="position-relative">
                <div className="bg-video-wrapper">
                    <iframe src="https://player.vimeo.com/video/187372244?background=1&autoplay=1&loop=1&byline=0&title=0" title="vimeo-video"></iframe>
                </div>
                <div className="bg-overlay"></div>
                <div className="container-fluid">
                    <Row>
                        <div className="col-12 p-0">
                            <div className="d-flex flex-column min-vh-100 justify-content-center px-md-5 py-5 px-4">
                                <div className="text-center mt-md-5">
                                    <Link to="#"><img src={Icon} alt="" /></Link>
                                </div>
                                <div className="title-heading text-center my-auto">
                                    <h4 className="coming-soon fw-bold display-3 text-white text-uppercase">Coming Soon</h4>
                                    <p className="text-white-50 para-desc mx-auto mb-0">Our design projects are fresh and simple and will benefit your business greatly. Learn more about our work!</p>

                                    <div className="subcribe-form mt-4 pt-2">
                                        <form action="page-comingsoon.html">
                                            <input type="email" id="email" className="bg-white opacity-6 rounded shadow" required placeholder="Type your Email.." />
                                            <button type="submit" className="btn btn-primary" style={{ top: '2.5px' }}>Notify Me</button>
                                        </form>
                                    </div>

                                    <p className="text-white-50 mt-2"><span className="text-danger fw-bold">*</span>Notify me when website is launched</p>
                                </div>
                                <div className="text-center mb-md-5 footer">
                                    <p className="mb-0 text-reset">© {(new Date().getFullYear())}{" "} Motos. Design with <i className="mdi mdi-heart text-danger"></i> by <Link to="#" className="text-reset">Shreethemes</Link>.</p>
                                </div>
                            </div>
                        </div>
                    </Row>
                </div>
            </section>
        </>
    )
};