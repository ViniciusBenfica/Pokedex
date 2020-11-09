import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

import { Bar } from "react-chartjs-2";

import ImagesPokemon from "../components/ImagesPokemon";
import CharacteristicsPokemons from "../components/CharacteristicsPokemon";

import { DivPokemon, InfoPokemon } from "../styles";

export default function Pokemon() {
  const [name, setName] = useState("");

  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");

  const [ability, setAbility] = useState("");

  const [type1, setType1] = useState("");
  const [type2, setType2] = useState("");

  const [imageFront, setImageFront] = useState();
  const [imageBack, setImageBack] = useState();
  const [ImageBackShiny, setImageBackShiny] = useState();
  const [ImageFrontShiny, setImageFrontShiny] = useState();

  const [moves, setMoves] = useState([]);

  const [abilityDescription, setAbilityDescription] = useState();

  const [chartData, setChartData] = useState({});

  const [hp, setHp] = useState();
  const [attack, setAttack] = useState();
  const [defense, setDefense] = useState();
  const [specialAttack, setSpecialAttack] = useState();
  const [specialDefense, setSpecialDefense] = useState();
  const [speed, setSpeed] = useState();

  const URL = window.location.pathname;
  const nameURL = URL.slice(1, -1);

  useEffect(() => {
    pokemon();
  }, []);

  useEffect(() => {
    descriptionAbility();
  }, [ability]);

  useEffect(() => {
    chart();
  }, [speed]);

  const pokemon = async () => {
    const { data } = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${nameURL}`
    );
    getCharacteristics(data);
    getAbility(data);
    getImage(data);
    getTypes(data);
    setMoves(data.moves);
    getStats(data);
  };

  const descriptionAbility = async () => {
    const { data } = await axios.get(
      `https://pokeapi.co/api/v2/ability/${ability}/`
    );
    setAbilityDescription(data.effect_entries[0].effect);
  };

  const move = moves.map((item) => {
    return <h4>{item.move.name}</h4>;
  });

  const getCharacteristics = ({ name, weight, height }) => {
    setName(name);
    setWeight(weight);
    setHeight(height);
  };

  const getAbility = ({ abilities }) => {
    setAbility(abilities.shift().ability.name);
  };

  const getImage = ({ sprites }) => {
    setImageFront(sprites.front_default);
    setImageBack(sprites.back_default);
    setImageBackShiny(sprites.back_shiny);
    setImageFrontShiny(sprites.front_shiny);
  };

  const getTypes = ({ types }) => {
    setType1(types.shift().type.name);
    types.length == 1 && setType2(types.shift().type.name);
  };

  const getStats = ({ stats }) => {
    setHp(stats[0].base_stat);
    setAttack(stats[1].base_stat);
    setDefense(stats[2].base_stat);
    setSpecialAttack(stats[3].base_stat);
    setSpecialDefense(stats[4].base_stat);
    setSpeed(stats[5].base_stat);
  };

  const chart = () => {
    setChartData({
      labels: [
        "hp",
        "attack",
        "defense",
        "special-attack",
        "special-defense",
        "speed",
      ],
      datasets: [
        {
          label: "Stats",
          data: [hp, attack, defense, specialAttack, specialDefense, speed],
          backgroundColor: ["#f34", "#f34", "#f34", "#f34", "#f34", "#f34"],
        },
      ],
    });
  };

  return (
    <DivPokemon>
      <div style={{ backgroundColor: "#d3d3d3", width: "54%", margin: "auto" }}>
        <h1>{name.toUpperCase()}</h1>
        <InfoPokemon>
          <ImagesPokemon
            imageFront={imageFront}
            imageBack={imageBack}
            ImageBackShiny={ImageBackShiny}
            ImageFrontShiny={ImageFrontShiny}
          />

          <CharacteristicsPokemons
            weight={weight}
            height={height}
            type1={type1}
            type2={type2}
            ability={ability}
            abilityDescription={abilityDescription}
            name={name}
            move={move}
          />
        </InfoPokemon>

        <Bar
          data={chartData}
          options={{
            responsive: true,
            scales: {
              yAxes: [
                {
                  ticks: {
                    autoSkip: true,
                    beginAtZero: true,
                    min: 0,
                    max: 100,
                    stepSize: 10,
                    display: false,
                  },
                  gridLines: {
                    display: false,
                  },
                },
              ],
              xAxes: [
                {
                  gridLines: {
                    display: false,
                  },
                },
              ],
            },
          }}
        ></Bar>
      </div>
    </DivPokemon>
  );
}
