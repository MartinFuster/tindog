import React from "react";

function ButtonOutlineSecondary(props) {
  return (
    <a
      href={props.href}
      target="_blank"
      type="button"
      rel="noopener noreferrer"
      className="button-outline-secondary"
    >
      <i className={props.icon}></i>&nbsp;
      {props.content}
    </a>
  );
}

export default ButtonOutlineSecondary;
