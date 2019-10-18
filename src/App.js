import React, { useState } from "react";
import { ApolloProvider } from "react-apollo";
import DogSelector from "./DogSelector";
import DogPhoto from "./DogPhoto";
import DogDelayedPhoto from "./DogDelayedPhoto";
import { DivContainer } from "./styles/App";

const App = ({ client }) => {
  const [selectedBreed, setSelectedBreed] = useState(null);

  return (
    <ApolloProvider client={client}>
      <DivContainer>
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
      </DivContainer>
    </ApolloProvider>
  );
};

// const DelayedDogPhoto = ({ breed }) => {
//   const [dog, setDog] = useState(null);
//   const [getDog, { loading, error, data }] = useLazyQuery(GET_DOG_PHOTO);

//   if (loading) return 'Loading...';
//   if (error) return `Error! ${error.message}`;

//   if (data && data.dog) {
//     console.log(data);
//     setDog(data.dog);
//   }

//   return (
//     <div>
//       {dog && <DogImg src={dog.displayImage} />}
//       <ActionBtn onClick={() => getDog({ variables: { breed } })}>
//         Click me!
//       </ActionBtn>
//     </div>
//   );
// }

export default App;
