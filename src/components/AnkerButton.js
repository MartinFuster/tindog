import React from "react";

function AnkerButton(props) {
  return (
    <div className="a-container">
      <a href={props.href} className="price-button">
        {props.content}
      </a>
    </div>
  );
}

export default AnkerButton;
