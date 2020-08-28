import React, { Component, useEffect } from "react";
import SideNavbar from "../components/SideNavbar";
import { Container, Row } from "react-bootstrap";
import { createUseStyles } from "react-jss";
import image from "../assets/image.jpg";
import { connect } from "react-redux";
import { authenticate, authorize } from "../store/actions";

function MainLayout(props) {
  const useStyles = createUseStyles((theme) => ({
    body: {
      color: "whitesmoke",
      height: "100vh",
      paddingLeft: "0",
    },
  }));
  const classes = useStyles();
  const { authorize, user } = props;
  useEffect(() => {
    authorize();
  }, []);
  return (
    <Container fluid className={classes.body}>
      <Row className={"w-100 ml-0 mr-0"}>
        <SideNavbar />
        {props.children}
      </Row>
    </Container>
  );
}

export default connect(
  (state) => ({ ...state }),
  (dispatch) => ({
    authorize: () => dispatch(authorize()),
  })
)(MainLayout);
