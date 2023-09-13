import React from "react";

const Input = ({ type, classStyle, placeholderText, changeEvent, value }) => {
  return <input type={type} value={value} onChange={changeEvent} className={classStyle} placeholder={placeholderText} />;
};

export default Input;
