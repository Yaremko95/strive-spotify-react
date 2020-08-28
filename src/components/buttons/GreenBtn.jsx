import React from "react";

function GreenBtn({ text }) {
  return (
    <button
      className="btn
                       btn-green
                       rounded-pill
                       text-uppercase
                       w-100
                       no-hover"
    >
      {text}
    </button>
  );
}

export default GreenBtn;
