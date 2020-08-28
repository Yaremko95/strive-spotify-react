import React from "react";
import { Col } from "react-bootstrap";
function Divider({ text }) {
  return (
    <Col xs={12}>
      <div className="divider">
        {text && <strong className="divider-title">{text}</strong>}
      </div>
    </Col>
  );
}

export default Divider;
