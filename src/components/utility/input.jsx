import React from "react";

const Input = ({ label, desc, index }) => {
  return (
    <div className="form-group">
      <label>{label}</label>
      <input
        type="text"
        id={index}
        className="form-control"
        placeholder={desc}
      />
    </div>
  );
};

export default Input;
