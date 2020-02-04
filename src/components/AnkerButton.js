import React from "react";

function AnkerButton(props) {
  function handleCLick(event) {
    event.preventDefault();
  }

  return (
    <div className="a-container">
      <a href={props.href} className="price-button" onClick={handleCLick}>
        {props.content}
      </a>
    </div>
  );
}

export default AnkerButton;
