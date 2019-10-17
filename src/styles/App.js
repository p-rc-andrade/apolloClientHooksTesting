import styled from "styled-components";

export const DivContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 500px;
    margin: 50px auto;
`;
  
export const DogImg = styled.img`
    max-width: 500px;
    max-height: 500px;
    margin: 0 auto;
`;
 

export const SelectInput = styled.select`
    height: 50px;
    width: 100%;
    margin-bottom: 50px;
`;

export const ActionBtn = styled.button`
    background: transparent;
    border: 2px solid #000;
    border-radius: 20px;
    height: 36px;
    width: 100px;
    font-weight: bolder;
    margin-top: 25px;
    float: left;
`;