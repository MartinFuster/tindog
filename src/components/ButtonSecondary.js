import React from "react";

function ButtonSecondary(props) {
  return (
    <a
      href={props.href}
      target="_blank"
      type="button"
      className="button-secondary"
      rel="noopener noreferrer"
    >
      <i className={props.icon}></i>&nbsp;
      {props.content}
    </a>
  );
}

export default ButtonSecondary;
