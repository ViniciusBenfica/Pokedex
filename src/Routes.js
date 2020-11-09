import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import axios from "axios";

import Pokedex from "./views/Pokedex";
import Pokemon from "./views/Pokemon";

export default function Routes() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    allPokemon();
  }, []);

  const allPokemon = async () => {
    const {data} = await axios.get(
      `https://pokeapi.co/api/v2/pokemon?limit=50`
    );
    setPokemons(data.results);
  };

  const urlPokemon = pokemons.map((item) => {
    return <Route path={`/${item.name}`} component={Pokemon} />;
  });

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Pokedex} />
        {urlPokemon}
      </Switch>
    </BrowserRouter>
  );
}
