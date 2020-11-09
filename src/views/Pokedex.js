import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

import { DivAllPokemons, Cards, NumberPokedex, NamePokemon } from "../styles";

export default function Pokedex() {
  const [pokemons, setPokemons] = useState([]);

  const [preFilter, setPreFilter] = useState("");
  const [filter, setFilter] = useState("");

  const [name, setName] = useState();
  const [id, setID] = useState();

  useEffect(() => {
    apiAllPokemons();
  }, []);

  useEffect(() => {
    pokemon();
  }, [filter]);

  useEffect(() => {
    imagePokemon();
  }, [pokemons]);

  const apiAllPokemons = async () => {
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon?limit=50`
    );
    setPokemons(response.data.results);
  };

  const pokemon = async () => {
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${filter}`
    );
    setName(response.data?.name);
    setID(response.data?.id);
  };

  const handleChange = (e) => {
    setPreFilter(e.target.value);
  };

  const handleClick = () => {
    setFilter(preFilter.toLowerCase());
  };

  const imagePokemon = (num) => num?.toString().padStart(3, "0");

  const allPokemons = pokemons.map((item, ID) => {
    return (
      <Cards>
        <Card className="mx-3 my-3" bg="light" style={{ width: "300px" }}>
          <Card.Img
            variant="top"
            src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${imagePokemon(
              ID + 1
            )}.png`}
          />
          <Card.Body>
            <Card.Title>
              <NumberPokedex>Number in pokédex: {ID + 1}</NumberPokedex>
            </Card.Title>
            <Card.Text>
              <NamePokemon>{item.name.toUpperCase()}</NamePokemon>
            </Card.Text>
            <Button variant="outline-primary">
              <Link to={`/${item.name}/`} className="btn">
                View more
              </Link>
            </Button>
          </Card.Body>
        </Card>
      </Cards>
    );
  });

  const getFilterPokemon = (name, id) => {
    return (
      <Cards style={{ height: "100vh" }}>
        <Card className="mx-3 my-3" bg="light" style={{ width: "300px" }}>
          <Card.Img
            variant="top"
            src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${imagePokemon(
              id
            )}.png`}
          />
          <Card.Body>
            <Card.Title>
              <NumberPokedex>Number in pokédex: {id}</NumberPokedex>
            </Card.Title>
            <Card.Text>
              <NamePokemon>{name?.toUpperCase()}</NamePokemon>
            </Card.Text>
            <Button variant="outline-primary">
              <Link to={`/${name}/`} className="btn">
                View more
              </Link>
            </Button>
          </Card.Body>
        </Card>
      </Cards>
    );
  };

  return (
    <DivAllPokemons>
      <div>
        <input type="text" onChange={handleChange} />
        <input type="button" value="Procure um pokemon" onClick={handleClick} />
      </div>

      {filter === "" ? <div>{allPokemons}</div> : getFilterPokemon(name, id)}
    </DivAllPokemons>
  );
}
