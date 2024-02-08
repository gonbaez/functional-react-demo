import React from "react";
import { useParams } from "react-router-dom";

import simpsons from "../backup.json";

const Character = () => {
  const { name } = useParams();
  console.log(name);
  const character = simpsons.find((character) => {
    return character.character === name;
  });

  console.log(character);
  return (
    <>
      <img src={character.image} />
    </>
  );
};

export default Character;
