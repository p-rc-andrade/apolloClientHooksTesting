import React,{useState} from 'react';
import { ApolloProvider } from "react-apollo";
import { gql } from "apollo-boost";
import { useQuery } from '@apollo/react-hooks';

var divStyle = {
  display: 'flex',
  flexDirection: "column",

  width: "500px",
  margin: "50px auto",
};

var imgStyle = {
  maxWidth: "500px",
  maxHeight: "500px",
  margin: "0 auto",
}

var selectStyle = {
  height: "50px",
  width: "100%",
  marginBottom: "50px"
}

var btnStyle = {
  background: "transparent",
  border: "2px solid #000",
  borderRadius: "20px",
  height: "36px",
  width: "100px",
  fontWeight: "bolder",
  marginTop: "25px",
  float: "left"
}

const App = ({client}) =>{
  const [selectedBreed, setSelectedBreed] = useState(null);
  
  return (
    <ApolloProvider client={client}>
      <div style={divStyle}>
        <h2>Dog breed selector <span role="img" aria-label="dog">🐶</span></h2>
        <Dogs onDogSelected={(event) => setSelectedBreed(event.target.value)}/>
        {console.log(selectedBreed)}
        {selectedBreed && (
          <DogPhoto breed={selectedBreed}/>
        )}
      </div>
     
    </ApolloProvider>
  );
}

const GET_DOGS = gql`
  {
    dogs {
      id
      breed
    }
  }
`;

const GET_DOG_PHOTO = gql`
  query Dog($breed: String!) {
    dog(breed: $breed) {
      id
      displayImage
      breed
    }
  }
`;

const Dogs = ({ onDogSelected }) => {
  const { loading, error, data } = useQuery(GET_DOGS);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
    <select name="dog" onChange={onDogSelected} style={selectStyle} >
      <option value="" disabled selected>-- Select a breed --</option>
      {data.dogs.map(dog => (
        <option key={dog.id} value={dog.breed}>
          {dog.breed}
        </option>
      ))}
    </select>
  );
}

const DogPhoto = ({ breed }) => {
  const { loading, error, data, startPolling, stopPolling, refetch } = useQuery(GET_DOG_PHOTO, {
    variables: { breed },
    skip: !breed,
    pollInterval: 10000,
  });

  console.log(breed);
  console.log("loading:"+loading);
  console.log("error:"+error);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error}`;

  return (
    <>
      <img src={data.dog.displayImage} alt={data.dog.breed} style={imgStyle}/>
      <button onClick={() => refetch()} style={btnStyle}>Refetch!</button>
    </>
  );
}

export default App;
