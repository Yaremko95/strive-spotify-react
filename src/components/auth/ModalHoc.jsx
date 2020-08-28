import React from "react";
import { createUseStyles } from "react-jss";
import { animated, Transition } from "react-spring/renderprops";
import Image from "react-bootstrap/Image";

const ModalHoc = ({ children }) => {
  const useStyles = createUseStyles({
    container: {
      position: "fixed",
      zIndex: "100",
      height: "100vh",
      width: "100%",
      backgroundColor: "rgba(255, 255, 255, .1)",
      backdropFilter: " blur(4px)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    modal: {
      width: "30%",
      padding: "2rem 2.5rem",
      backgroundColor: "rgba(0,0,0)",
      borderRadius: "5px",
    },
    elementContainer: {
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "1.5rem 0",
    },
  });
  const classes = useStyles();
  const [show, setShow] = React.useState(true);
  React.useEffect(() => {
    setShow(true);
    return () => {
      setShow(false);
    };
  }, [show]);
  return (
    <div className={classes.container}>
      <Transition
        native
        items={show}
        from={{
          o: 0,
          xyz: [-20, 0, 1],
        }}
        enter={[
          {
            o: 1,
            xyz: [0, 0, 1],
          },
        ]}
        leave={{
          o: 0,
          xyz: [0, 0, 0.5],
        }}
      >
        {(show) =>
          show &&
          ((props) => (
            <animated.div
              className={classes.modal}
              style={{
                transform: props.xyz.interpolate(
                  (x, y, z) => `translateX(${x}%) translateY(${y}%) scale(${z})`
                ),
                opacity: props.o.interpolate({
                  range: [0.0, 1, 1.25, 2],
                  output: [0, 1, 0, 0],
                }),
              }}
            >
              <div className={classes.elementContainer}>
                <Image
                  fluid
                  src={"/assets/logo-white.png"}
                  style={{ width: "30%" }}
                />
              </div>
              {children}
            </animated.div>
          ))
        }
      </Transition>
    </div>
  );
};

export default ModalHoc;
