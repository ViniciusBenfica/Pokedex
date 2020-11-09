import React, { useState, useEffect } from "react";

import {
  HeightAndWeight,
  ImageType,
  HabilityAndType,
  CharacteristicsPokemon,
} from "../styles";

import Bug from "../image/bug.png";
import Dark from "../image/dark.png";
import Dragon from "../image/dragon.png";
import Electric from "../image/electric.png";
import Fairy from "../image/fairy.png";
import Fighting from "../image/fighting.png";
import Fire from "../image/fire.png";
import Flying from "../image/flying.png";
import Ghost from "../image/ghost.png";
import Grass from "../image/grass.png";
import Ground from "../image/ground.png";
import Ice from "../image/ice.png";
import Normal from "../image/normal.png";
import Poison from "../image/poison.png";
import Psychic from "../image/psychic.png";
import Rock from "../image/rock.png";
import Steel from "../image/steel.png";
import Water from "../image/water.png";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function CharacteristicsPokemons({
  weight,
  height,
  type1,
  type2,
  ability,
  abilityDescription,
  name,
  move,
}) {
  const [showMoves, setShowMoves] = useState(false);
  const [showAbility, setShowAbility] = useState(false);

  useEffect(() => {
    masked();
  }, []);

  const types = {
    grass: { Grass }.Grass,
    dragon: { Dragon }.Dragon,
    fire: { Fire }.Fire,
    water: { Water }.Water,
    bug: { Bug }.Bug,
    normal: { Normal }.Normal,
    poison: { Poison }.Poison,
    electric: { Electric }.Electric,
    ground: { Ground }.Ground,
    fighting: { Fighting }.Fighting,
    psychic: { Psychic }.Psychic,
    rock: { Rock }.Rock,
    flying: { Flying }.Flying,
    ghost: { Ghost }.Ghost,
    ice: { Ice }.Ice,
    steel: { Steel }.Steel,
    dark: { Dark }.Dark,
    fairy: { Fairy }.Fairy,
  };

  const masked = (item) => {
    return item / 10;
  };

  return (
    <CharacteristicsPokemon>
      <HeightAndWeight>
        <div>
          <h5 style={{ color: "#fff" }}>Weight</h5>
          <p>{masked(weight)}Kg</p>
          <h5 style={{ color: "#fff" }}>Height</h5>
          <p>{masked(height)}m</p>
        </div>

        <div>
          <h5 style={{ color: "#fff" }}>ability</h5>
          <p>
            {ability}{" "}
            <Button variant="primary" onClick={() => setShowAbility(true)}>
              ?
            </Button>
          </p>

          <Modal
            show={showAbility}
            onHide={() => setShowAbility(false)}
            dialogClassName="modal-90w"
          >
            <Modal.Header closeButton>
              <Modal.Title>{name} moves</Modal.Title>
            </Modal.Header>
            <Modal.Body>{abilityDescription}</Modal.Body>
          </Modal>

          <Button
            style={{ marginTop: "25px" }}
            variant="primary"
            onClick={() => setShowMoves(true)}
          >
            Show moves
          </Button>

          <Modal
            show={showMoves}
            onHide={() => setShowMoves(false)}
            dialogClassName="modal-90w"
          >
            <Modal.Header closeButton>
              <Modal.Title>{name} moves</Modal.Title>
            </Modal.Header>
            <Modal.Body>{move}</Modal.Body>
          </Modal>
        </div>
      </HeightAndWeight>

      <HabilityAndType>
        <div>
          <h5>Type</h5>
          <ImageType src={types[type1]}></ImageType>
          {type2 !== "" && <ImageType src={types[type2]}></ImageType>}
        </div>
      </HabilityAndType>
    </CharacteristicsPokemon>
  );
}
