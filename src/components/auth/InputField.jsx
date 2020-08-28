import React from "react";
import withStyles from "react-jss";

const styles = {
  input: {
    width: "90%",
    height: "40px",
    backgroundColor: " rgba(46, 47, 51, 0.75)",
    borderRadius: "3px",
    paddingLeft: "10px",
    color: "whitesmoke",
    fontSize: "15px",
    outline: "none",
    border: "none",
    marginTop: "1rem",
    "&:focus": {
      backgroundColor: "rgb(60, 60, 60)",
    },
    "'&::placeholder':": {
      color: "rgb(136, 137, 140)",
    },
  },
};
const InputField = withStyles(
  styles
)(({ classes, placeholder, value, handleChange }) => (
  <input className={classes.input} placeholder={placeholder} />
));

export default InputField;
