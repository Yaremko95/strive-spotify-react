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
  checkboxTitle: {
    color: "rgb(136, 137, 140)",
    fontSize: "1.2rem",
    marginTop: "1.5rem",
    float: "left",
  },
  elementContainer: {
    width: "90%",
    position: "relative",
  },
};
const InputField = withStyles(styles)(({ classes, ...rest }) => (
  <input className={classes.input} {...rest} />
));

export const RememberCheckbox = withStyles(styles)(({ classes, ...rest }) => (
  <div className={classes.elementContainer}>
    <h5 className={classes.checkboxTitle}>Remember</h5>
    <input
      type="checkbox"
      name="remember"
      id="btn-toggle-1"
      className="btn-toggle btn-toggle-round"
    />
    <label
      htmlFor="btn-toggle-1"
      className={classes.btnToggleLabel + " " + classes.btnToggleRoundLabel}
    />
  </div>
));

export default InputField;
