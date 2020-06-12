import React, {Component} from 'react';
import {createUseStyles} from "react-jss";
import image from "../assets/image.jpg";
import HomeNavbar from "../components/HomeNavbar";


function Home (props){

    const useStyles = createUseStyles((theme) => ({
        main: {
            backgroundImage:  `url(${image})` ,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
            backgroundPosition:"center",



        }

    }))
      const  classes = useStyles()
        return (
            <div className={"col-sm-9 col-md-9 col-lg-10 pb-sm-4 " + classes.main}>
            <HomeNavbar/>
            </div>
        );

}

export default Home;