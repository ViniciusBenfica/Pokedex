import styled from "styled-components";

import imgBackground from "./image/background.jpg"

export const DivAllPokemons = styled.div`
  height: 100%;
  text-align: center;
  background-image: url(${imgBackground});
  border-width: 50px;
  border-style: solid;
  border-top-width: 0px;
  border-bottom-width: 0px;
  border-color: rgb(0, 0, 0, 0.7);
`;

export const Cards = styled.div`
  display: inline-block;
`;

export const NumberPokedex = styled.h4`
  color: rgb(0, 0, 0, 0.3);
  font-size: 15px;
`;

export const NamePokemon = styled.h4`
  font-size: 30px;
`;


export const DivPokemon = styled.div`
  height: 100%;
  text-align: center;
  background-image: url(${imgBackground});
  border-width: 50px;
  border-style: solid;
  border-top-width: 0px;
  border-bottom-width: 0px;
  border-color: rgb(0, 0, 0, 0.7);
`;

export const ImageType = styled.img`
  width: 150px;
  height: 150px;
`;

export const CharacteristicsPokemon = styled.div`
  display: flex;
  margin-bottom: 50px;
  margin-top: 25px;

  @media(max-width: 1450px) {
    flex-direction: column;
  }
`;

export const HabilityAndType = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 330px;
  height: 200px;
`;

export const HeightAndWeight = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 10%;
  width: 330px;
  height: 200px;
  background-color: rgb(0, 0, 250, 0.5);
`;

export const ImagePokemon = styled.img`
  width: 330px;
  height: 300px;
  background-color: #BEBEBE;
`;

export const InfoPokemon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5%;
`;
