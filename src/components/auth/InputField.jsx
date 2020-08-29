import React from "react";
import withStyles from "react-jss";
import { Button } from "react-bootstrap";
import { animated, useSpring } from "react-spring";
import Image from "react-bootstrap/Image";

const styles = {
  input: {
    width: "90%",
    height: "30px",
    backgroundColor: " rgba(46, 47, 51, 0.75)",
    borderRadius: "1px",
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
  buttonContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "1.5rem 1rem",
  },
  button: {
    clear: "both",
    display: "block",
    width: "100%",
    height: " 45px",
    outline: "none",
    border: "none",
    backgroundColor: "rgb(122, 189, 0)",
    borderRadius: "30px",
    color: "rgba(231, 252, 255, 1)",
    fontWeight: "400",
    fontSize: "1.2rem",
    textTransform: "uppercase",
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
    <label htmlFor="btn-toggle-1" />
  </div>
));

export const CustomButton = withStyles(styles)(({ classes, ...rest }) => {
  const [animate, toggle] = React.useState(false);
  const props = useSpring({
    to: { transform: animate ? "scale(1.1)" : "scale(1)" },
    from: { transform: "scale(1)" },
  });
  return (
    <div className={classes.buttonContainer}>
      <animated.input
        type={"button"}
        className={classes.button}
        {...rest}
        onMouseEnter={() => toggle(true)}
        onMouseLeave={() => toggle(false)}
        style={props}
      />
    </div>
  );
});

export default InputField;
