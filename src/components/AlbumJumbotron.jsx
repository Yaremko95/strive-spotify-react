import React, {Component} from 'react';
import {Col, Jumbotron} from "react-bootstrap";

function AlbumJumbotron (props) {

        return (

                <Jumbotron className=" d-flex flex-column justify-content-center align-items-center rounded-0">

                    <div className="d-flex flex-column justify-content-center align-items-center mt-4">
                        <small className="mb-2">33,000,575 MONTHLY LISTENERS</small>
                        <h2 className="art-title"><b></b></h2>
                        <div className="d-lg-flex mt-2 d-sm-flex text-center">
                            <button className="btn  w-75 rounded-pill mx-sm-4 mr-lg-3 mb-2">PLAY</button>
                            <button className="btn  w-75 rounded-pill  mb-2">FOLLOW</button>
                        </div>
                    </div>

                    <nav className="navbar navbar-expand-lg navbar-light mt-auto jumbotron-navbar ">

                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="d-flex align-items-center  mt-auto ">
                            <div className="collapse navbar-collapse " id="navbarSupportedContent">
                                <ul className="navbar-nav m-auto ">
                                    <li className="nav-item active mr-3">
                                        <a className="nav-link  " href="#">OVERVIEW <span
                                            className="sr-only">(current)</span></a>
                                    </li>
                                    <li className="nav-item mr-3">
                                        <a className="nav-link " href="#">RELATED ARTISTS</a>
                                    </li>

                                    <li className="nav-item mr-3">
                                        <a className="nav-link " href="#">ABOUT</a>
                                    </li>

                                </ul>

                            </div>
                        </div>
                    </nav>

                </Jumbotron>


        );

}

export default AlbumJumbotron;