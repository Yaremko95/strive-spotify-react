import React, {Component} from 'react';
import {Button, Nav, Navbar} from "react-bootstrap";
import logo from "../assets/Spotify_Logo_RGB_White.png"
import Image from "react-bootstrap/Image";
import {AiOutlineHome, AiOutlineSearch, GiBookshelf} from "react-icons/all";
import {Link, withRouter} from "react-router-dom";
import {createUseStyles} from "react-jss";

function SideNavbar (props) {
    const useStyles = createUseStyles({
        link:{
            color: "#93a0b0",
            fontSize:" 1.1rem",
            textDecoration: "none",
        },
        linkActive: {
            color: "whitesmoke",
            fontSize:" 1.1rem",
            textDecoration: "none",
        }
    })
const classes = useStyles()
        return (
            <>
            <Navbar className="col-sm-3 col-md-3 col-lg-2 d-none d-md-block  sidebar p-0">
                <div className="sidebar-sticky "
                     style={{
                        position: "sticky",
                        top: "0",
                        height:" 95vh",
                        display:"flex",
                        flexDirection:"column",
                        justifyContent:"space-between",
                        alignContent:"space-between",
                         backgroundColor: "black"}}>

                    <div className="col">
                        <Nav className="nav flex-column justify-content-center  mb-3  mb-auto " >
                            <Nav.Link className="nav-item mt-2  w-100 justify-content-center align-items-center">
                                <Image name="encore" src={logo}
                                     className="image-fluid img-thumbnail border-0 rounded-0" width="80%" alt="" style={{backgroundColor:"black"}}/>
                            </Nav.Link>
                            <Nav.Link className={"mt-3  nav-item "} as={Link} to={"/"}>
                                <span className={props.location.pathname==='/'? classes.linkActive : classes.link}><AiOutlineHome className="mr-2" style={{fontSize:"1.5rem"}}/>Home </span>
                            </Nav.Link>
                            <Nav.Link className={"mt-3  nav-item "} as={Link} to={"/search"}>
                                <span className={props.location.pathname==='/search'? classes.linkActive : classes.link}><AiOutlineSearch className="mr-2" style={{fontSize:"1.5rem"}}/>Search </span>
                            </Nav.Link>
                            <Nav.Link className={"mt-3  nav-item "}  as={Link} to={"/albums"}>
                                <span className={props.location.pathname==='/albums'? classes.linkActive : classes.link}>
                                    <GiBookshelf className="mr-2" style={{fontSize:"1.5rem"}}/>Your Library
                                </span>
                            </Nav.Link>
                        </Nav>
                    </div>
                    <div className="col d-flex flex-column w-100">
                        <Nav className="nav flex-column justify-content-center align-items-center w-100 mt-auto pb-5">
                            <Nav.Link className="nav-item w-100 mb-3">
                                <Button type="button" className="btn btn-light  w-100 rounded-pill">SIGN UP
                                </Button>
                            </Nav.Link>
                            <Nav.Link className="nav-item w-100 mb-2">
                                <Button type="button" onClick="goToLogin()"
                                        className="btn btn-secondary w-100 rounded-pill"
                                        style={{backgroundColor: "black", color: "whitesmoke", border: "1px solid white", fontWeight: "500"}}>LOGIN
                                </Button>
                            </Nav.Link>
                            <Nav.Item className="nav-item">
                                <small className="mr-2">Cookie</small>|<small className="ml-2">Privacy Policy</small>
                            </Nav.Item>

                        </Nav>
                    </div>
                </div>

            </Navbar>
                </>
        );

}

export default withRouter(SideNavbar);