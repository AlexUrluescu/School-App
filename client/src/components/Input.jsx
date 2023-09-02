import React from "react";

const Input = ({ classStyle, placeholderText, changeEvent, value }) => {
  return <input value={value} onChange={changeEvent} className={classStyle} placeholder={placeholderText} />;
};

export default Input;
