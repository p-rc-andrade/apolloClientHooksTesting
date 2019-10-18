import React, { useState } from "react";
import DogSelector from "./DogSelector";
import DogPhoto from "./DogPhoto";
import DogDelayedPhoto from "./DogDelayedPhoto";

const Dog = () => {
  const [selectedBreed, setSelectedBreed] = useState(null);

  return (
    <>
      <h2>
        Dog breed selector{" "}
        <span role="img" aria-label="dog">
          🐶
        </span>
      </h2>
      <DogSelector
        onDogSelected={event => setSelectedBreed(event.target.value)}
      />
      {/* {console.log(selectedBreed)} */}
      {selectedBreed && (
        // <DogPhoto breed={selectedBreed} />
        <DogDelayedPhoto breed={selectedBreed} />
      )}
    </>
  );
};

export default Dog;
