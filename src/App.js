import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle` 
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  
    body{
      background-color: black;
      font-family: 'Anton', sans-serif;
      display:flex;
      align-items: center;
      justify-content:space-around;
      height:100vh;
    }
  }`;

const Container = styled.section``;

const Title = styled.h1`
  color: white;
  font-size: 6vw;
  font-family: "Courier New", Courier, monospace;
`;

const Box = styled.div`
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
`;

const DogButton = styled.button`
  border: none;
  border-radius: 50%;
  width: 10vw;
  height: 10vh;
  background-color: black;
  &:hover {
    background-color: white;
    transform: scale(1.1);
    cursor: pointer;
    transition: 4s all;
  }
`;

const DogImage = styled.img`
  border-radius: 50%;
`;

export default function dogEipiai() {
  const [modal, setModal] = useState();
  const [dog, setDog] = useState([]);

  // para deixar de exibir o texto do alt assim que a página renderiza, criamos a mesma lógica do modal para
  // confirmar aparição das fotos e do texto
  const [displayImage, setDisplayImage] = useState(false);

  function DogList() {
    axios.get(`https://dog.ceo/api/breeds/image/random`).then((response) => {
      setDog(response.data.message);
      setDisplayImage(true);
    });
  }

  return (
    <Container>
      <GlobalStyle />
      <Title>Ache os doguinhos</Title>
      <Box>
        <DogButton
          onClick={() => {
            DogList();
          }}
        >
          DOG
        </DogButton>
        {/* aqui englobamos em chaves para criar uma lógica. o nome disso é renderização condicional */}
        {displayImage && (
          <DogImage
            style={{ width: "30vw" }}
            src={dog}
            alt="fotos de doguinhos"
          />
        )}
      </Box>
    </Container>
  );
}
