import React from "react";

const Input = (props) => {
  const { name, type, onUserInput, error, options } = props;

  if (type === "select") {
    return (
      <div>
        <label htmlFor={name}>{name}</label>
        <select name={name} id={name} onInput={onUserInput}>
          {options.map((option) => {
            return <option value={option}>{option}</option>;
          })}
        </select>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <>
      <div>
        <label htmlFor={name}>{name}</label>
        <input
          type={type ? type : "text"}
          name={name}
          id={name}
          onInput={onUserInput}
        />
        <p>{error}</p>
      </div>
    </>
  );
};

export default Input;
