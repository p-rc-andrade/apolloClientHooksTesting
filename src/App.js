import React,{useState} from 'react';
import { ApolloProvider } from "react-apollo";
import { useQuery } from '@apollo/react-hooks';
import { DivContainer, DogImg, SelectInput, ActionBtn } from "./styles/App";
import { GET_DOGS, GET_DOG_PHOTO } from "./queries";

const App = ({client}) =>{
  const [selectedBreed, setSelectedBreed] = useState(null);
  
  return (
    <ApolloProvider client={client}>
      <DivContainer>
        <h2>Dog breed selector <span role="img" aria-label="dog">🐶</span></h2>
        <Dogs onDogSelected={(event) => setSelectedBreed(event.target.value)}/>
        {console.log(selectedBreed)}
        {selectedBreed && (
          <DogPhoto breed={selectedBreed}/>
        )}
      </DivContainer>
     
    </ApolloProvider>
  );
}



const Dogs = ({ onDogSelected }) => {
  const { loading, error, data } = useQuery(GET_DOGS);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
    <SelectInput name="dog" onChange={onDogSelected}>
      <option value="" disabled selected>-- Select a breed --</option>
      {data.dogs.map(dog => (
        <option key={dog.id} value={dog.breed}>
          {dog.breed}
        </option>
      ))}
    </SelectInput>
  );
}

const DogPhoto = ({ breed }) => {
  const { loading, error, data, startPolling, 
    stopPolling, refetch, networkStatus  } = useQuery(GET_DOG_PHOTO, {
      variables: { breed },
      skip: !breed,
      pollInterval: 10000,
      notifyOnNetworkStatusChange: true,
  });

  console.log(breed);
  console.log("loading:"+loading);
  console.log("error:"+error);

  if (networkStatus === 4) return 'Refetching!';
  if (networkStatus === 6) return 'Polling!';
  if (loading) return 'Loading...';
  if (error) return `Error! ${error}`;

  return (
    <>
      <DogImg src={data.dog.displayImage} alt={data.dog.breed}/>
      <ActionBtn onClick={() => refetch()}>Refetch!</ActionBtn>
    </>
  );
}

export default App;
