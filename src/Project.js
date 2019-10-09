import React, { Component } from 'react';
import Swiper from 'swiper';
import 'swiper/css/swiper.css';
import './Project.css';

class Project extends Component {

    swiper = null;

    componentDidMount() {
        this.swiper = new Swiper('.swiper-container', {
            effect: 'fade',
            fadeEffect: {
                crossFade: true
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
    }

    render() {
        return (
            <div className="pageProject">
                <div className="projectContent">
                    <div className="swiper-container">
                        <div className="swiper-wrapper">

                            <div className="swiper-slide">
                                <img
                                    src={`${process.env.PUBLIC_URL}/images/projects/winter-park-royale/01.jpg`}
                                    alt="1"
                                />
                            </div>
                            <div className="swiper-slide">
                                <img
                                    src={`${process.env.PUBLIC_URL}/images/projects/winter-park-royale/02.jpg`}
                                    alt="2"
                                />
                            </div>
                            <div className="swiper-slide">
                                <img
                                    src={`${process.env.PUBLIC_URL}/images/projects/winter-park-royale/03.jpg`}
                                    alt="3"
                                />
                            </div>
                            <div className="swiper-slide">
                                <img
                                    src={`${process.env.PUBLIC_URL}/images/projects/winter-park-royale/04.jpg`}
                                    alt="4"
                                />
                            </div>

                            <div className="swiper-slide">
                                <img
                                    src={`${process.env.PUBLIC_URL}/images/projects/winter-park-royale/05.jpg`}
                                    alt="1"
                                />
                            </div>
                            <div className="swiper-slide">
                                <img
                                    src={`${process.env.PUBLIC_URL}/images/projects/winter-park-royale/06.jpg`}
                                    alt="2"
                                />
                            </div>
                            <div className="swiper-slide">
                                <img
                                    src={`${process.env.PUBLIC_URL}/images/projects/winter-park-royale/07.jpg`}
                                    alt="3"
                                />
                            </div>
                            <div className="swiper-slide">
                                <img
                                    src={`${process.env.PUBLIC_URL}/images/projects/winter-park-royale/08.jpg`}
                                    alt="4"
                                />
                            </div>

                            <div className="swiper-slide">
                                <img
                                    src={`${process.env.PUBLIC_URL}/images/projects/winter-park-royale/09.jpg`}
                                    alt="1"
                                />
                            </div>
                            <div className="swiper-slide">
                                <img
                                    src={`${process.env.PUBLIC_URL}/images/projects/winter-park-royale/10.jpg`}
                                    alt="2"
                                />
                            </div>
                            <div className="swiper-slide">
                                <img
                                    src={`${process.env.PUBLIC_URL}/images/projects/winter-park-royale/11.jpg`}
                                    alt="3"
                                />
                            </div>
                            <div className="swiper-slide">
                                <img
                                    src={`${process.env.PUBLIC_URL}/images/projects/winter-park-royale/12.jpg`}
                                    alt="4"
                                />
                            </div>

                            <div className="swiper-slide">
                                <img
                                    src={`${process.env.PUBLIC_URL}/images/projects/winter-park-royale/13.jpg`}
                                    alt="1"
                                />
                            </div>
                            <div className="swiper-slide">
                                <img
                                    src={`${process.env.PUBLIC_URL}/images/projects/winter-park-royale/14.jpg`}
                                    alt="2"
                                />
                            </div>
                            <div className="swiper-slide">
                                <img
                                    src={`${process.env.PUBLIC_URL}/images/projects/winter-park-royale/15.jpg`}
                                    alt="3"
                                />
                            </div>
                            <div className="swiper-slide">
                                <img
                                    src={`${process.env.PUBLIC_URL}/images/projects/winter-park-royale/16.jpg`}
                                    alt="4"
                                />
                            </div>

                            <div className="swiper-slide">
                                <img
                                    src={`${process.env.PUBLIC_URL}/images/projects/winter-park-royale/17.jpg`}
                                    alt="1"
                                />
                            </div>
                            <div className="swiper-slide">
                                <img
                                    src={`${process.env.PUBLIC_URL}/images/projects/winter-park-royale/18.jpg`}
                                    alt="2"
                                />
                            </div>
                            <div className="swiper-slide">
                                <img
                                    src={`${process.env.PUBLIC_URL}/images/projects/winter-park-royale/19.jpg`}
                                    alt="3"
                                />
                            </div>
                            <div className="swiper-slide">
                                <img
                                    src={`${process.env.PUBLIC_URL}/images/projects/winter-park-royale/20.jpg`}
                                    alt="4"
                                />
                            </div>

                            <div className="swiper-slide">
                                <img
                                    src={`${process.env.PUBLIC_URL}/images/projects/winter-park-royale/05.jpg`}
                                    alt="1"
                                />
                            </div>
                            <div className="swiper-slide">
                                <img
                                    src={`${process.env.PUBLIC_URL}/images/projects/winter-park-royale/06.jpg`}
                                    alt="2"
                                />
                            </div>
                            <div className="swiper-slide">
                                <img
                                    src={`${process.env.PUBLIC_URL}/images/projects/winter-park-royale/07.jpg`}
                                    alt="3"
                                />
                            </div>
                            <div className="swiper-slide">
                                <img
                                    src={`${process.env.PUBLIC_URL}/images/projects/winter-park-royale/08.jpg`}
                                    alt="4"
                                />
                            </div>
                        </div>
                        <div className="swiper-button-next"></div>
                        <div className="swiper-button-prev"></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Project;