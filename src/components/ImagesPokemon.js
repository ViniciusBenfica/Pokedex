import React from "react";

import Carousel from "react-bootstrap/Carousel";

import { ImagePokemon } from "../styles";

export default function imagesPokemon({
  imageFront,
  imageBack,
  ImageBackShiny,
  ImageFrontShiny,
}) {
  return (
    <Carousel>
      <Carousel.Item>
        <h2>Normal version</h2>
        <ImagePokemon src={imageFront}></ImagePokemon>
        <ImagePokemon src={imageBack}></ImagePokemon>
      </Carousel.Item>
      <Carousel.Item>
        <h2>Shiny version</h2>
        <ImagePokemon src={ImageFrontShiny}></ImagePokemon>
        <ImagePokemon src={ImageBackShiny}></ImagePokemon>
      </Carousel.Item>
    </Carousel>
  );
}
