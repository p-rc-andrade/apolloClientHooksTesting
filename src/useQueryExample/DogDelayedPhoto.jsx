import React from "react";
import { useLazyQuery } from "@apollo/react-hooks";
import { GET_DOG_PHOTO } from "../queries";
import { DogImg, ActionBtn } from "../styles/App";

const DogDelayedPhoto = ({ breed }) => {
  const [getDogPhoto, { loading, error, data }] = useLazyQuery(GET_DOG_PHOTO);

  if (loading) return "Loading...";
  if (error) return `Error! ${error}`;

  return (
    <>
      {data && data.dog && (
        <DogImg src={data.dog.displayImage} alt={data.dog.breed} />
      )}
      <ActionBtn onClick={() => getDogPhoto({ variables: { breed } })}>
        Fetch data!
      </ActionBtn>
    </>
  );
};

export default DogDelayedPhoto;
