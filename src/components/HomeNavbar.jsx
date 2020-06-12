import React, {Component} from 'react';
import {Button, Nav, Navbar} from "react-bootstrap";
import {Link, withRouter} from "react-router-dom";
import {createUseStyles} from "react-jss";

function HomeNavbar (props) {
const useStyles= createUseStyles({
    link:{
        textTransform: "uppercase",
         color: "#93a0b0",
        fontSize:"1.3rem",
        "&:hover": {
            borderBottom:" 1px solid #38b15e",
             color: "whitesmoke",

        },
    },
    linkActive: {
        borderBottom:" 1px solid #38b15e",
        color: "whitesmoke",
        textTransform: "uppercase",
        fontSize:"1.3rem",
    }
})
    const classes=useStyles()
        return (
            <Navbar className="navbar navbar-expand-lg navbar-light   pt-3 mb-3">

                <Button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </Button>

                <div className="d-flex align-items-center m-auto">
                    <div className="collapse navbar-collapse "  >
                        <Nav className="navbar-nav m-auto ">
                            <Nav.Link as={Link} to={"/trending"} className="nav-item active mr-3">
                                <span className={props.location.pathname==='/trending'? classes.linkActive : classes.link}>Trending <span
                                    className="sr-only">(current)</span></span>
                            </Nav.Link>
                            <Nav.Link as={Link} to={"/podcast"} className="nav-item mr-3">
                                <span className={props.location.pathname==='/podcast'? classes.linkActive : classes.link}>Podcast</span>
                            </Nav.Link>

                            <Nav.Link as={Link} to={"/moods&genres"} className="nav-item mr-3">
                                <span className={props.location.pathname==='/moods&genres'? classes.linkActive : classes.link}>Moods and genres</span>
                            </Nav.Link>
                            <Nav.Link as={Link} to={"/new_releases"} className="nav-item mr-3">
                                <span className={props.location.pathname==='/new_releases'? classes.linkActive : classes.link}>New Releases</span>
                            </Nav.Link>
                            <Nav.Link as={Link} to={"/discover"} className="nav-item mr-3">
                                <span className={props.location.pathname==='/discover'? classes.linkActive : classes.link}>Discover</span>
                            </Nav.Link>
                        </Nav>

                    </div>
                </div>
            </Navbar>
        );

}

export default withRouter(HomeNavbar);