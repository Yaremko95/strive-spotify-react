import React from "react";
import withStyles from "react-jss";
import { Button } from "react-bootstrap";
import { animated, useSpring } from "react-spring";
import Image from "react-bootstrap/Image";

const styles = {
  input: {
    width: "90%",
    height: "40px",
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
    fontSize: "1rem",
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
    padding: "1.5rem 0",
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
  linkButton: {
    clear: "both",
    display: "block",
    outline: "none",
    border: "none",
    backgroundColor: "transparent",
    color: "rgba(231, 252, 255, 1)",

    textTransform: "uppercase",
  },
  lineContainer: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    justifyContent: "space-between",
    padding: "0 1rem",
  },
  line: {
    width: "40%",
    height: "1px",
    backgroundColor: "rgba(240, 240, 240, 0.2)",
  },

  orSpan: {
    fontSize: "1.rem",
    color: "rgba(240, 240, 240, 0.58)",
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

export const CustomButton = withStyles(styles)(
  ({ classes, color, from, to, ...rest }) => {
    const [animate, toggle] = React.useState(false);
    const props = useSpring({
      to: {
        transform: animate ? "scale(1)" : "scale(0.9)",
        background: animate ? to.background : from.background,
        color: animate ? to.color : from.color,
      },
      from: {
        transform: "scale(0.9)",
        ...from,
      },
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
  }
);

export const LinkButton = withStyles(styles)(
  ({ classes, style, children, ...rest }) => (
    <button className={classes.linkButton} style={style} {...rest}>
      {children}
    </button>
  )
);
export const withPropsChange = (BaseComponent) => (props) => (
  <BaseComponent {...props} />
);

export const BreakLine = withStyles(styles)(({ classes, ...rest }) => (
  <div className={classes.lineContainer}>
    <div className={classes.line}></div>
    <span className={classes.orSpan}>OR</span>
    <div className={classes.line}></div>
  </div>
));

export default InputField;
