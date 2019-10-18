import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { GET_DOGS } from "./queries";
import { SelectInput } from "./styles/App";

const DogSelector = ({ onDogSelected }) => {
  const { loading, error, data } = useQuery(GET_DOGS);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return (
    <SelectInput name="dog" onChange={onDogSelected}>
      <option value="" disabled selected>
        -- Select a breed --
      </option>
      {data.dogs.map(dog => (
        <option key={dog.id} value={dog.breed}>
          {dog.breed}
        </option>
      ))}
    </SelectInput>
  );
};

export default DogSelector;
