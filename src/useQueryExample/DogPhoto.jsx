import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { GET_DOG_PHOTO } from "../queries";
import { DogImg, ActionBtn } from "../styles/App";

const DogPhoto = ({ breed }) => {
  const {
    loading,
    error,
    data,
    startPolling,
    stopPolling,
    refetch,
    networkStatus
  } = useQuery(GET_DOG_PHOTO, {
    variables: { breed },
    skip: !breed,
    pollInterval: 10000,
    notifyOnNetworkStatusChange: true,
    errorPolicy: "all"
  });

  //   console.log(breed);
  //   console.log("loading:" + loading);
  //   console.log("error:" + error);

  if (networkStatus === 4) return "Refetching!";
  if (networkStatus === 6) return "Polling!";
  if (loading) return "Loading...";
  if (error) return `Error! ${error}`;

  return (
    <>
      <DogImg src={data.dog.displayImage} alt={data.dog.breed} />
      <ActionBtn onClick={() => refetch()}>Refetch!</ActionBtn>
    </>
  );
};

export default DogPhoto;
