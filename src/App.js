import React from "react";

import Joi from "joi";
import { useState } from "react";
import Input from "./components/input/Input";

const App = () => {
  const [userInput, setUserInput] = useState({});
  const [error, setError] = useState();

  const schema = {
    username: Joi.string().min(3).max(30).required(),
    password: Joi.string().required(),
  };

  const onUserInput = async (e) => {
    console.log(e.target.name, e.target.value);
    setUserInput({ ...userInput, [e.target.name]: e.target.value });
    const _joiInstance = Joi.object(schema);

    try {
      await _joiInstance.validateAsync(userInput);
      console.log("No errors");
      setError(undefined);
    } catch (e) {
      console.log(e);
      const errorsMod = {};
      e.details.forEach((error) => {
        errorsMod[error.context.key] = error.message;
      });

      setError(errorsMod);
    }
  };

  return (
    <>
      <Input
        name="name"
        type="text"
        onUserInput={onUserInput}
        error={error && error.name}
      />
      <Input
        name="username"
        onUserInput={onUserInput}
        error={error && error.username}
      />
      <Input
        name="email"
        type="email"
        onUserInput={onUserInput}
        error={error && error.email}
      />
      <Input
        name="passowrd"
        type="password"
        onUserInput={onUserInput}
        error={error && error.password}
      />
      <Input
        name="currency"
        type="select"
        onUserInput={onUserInput}
        error={error && error.currency}
        options={["one", "two", "three"]}
      />
    </>
  );
};

export default App;
