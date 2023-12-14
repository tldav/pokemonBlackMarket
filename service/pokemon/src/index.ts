import { format } from "path";
import DataFormatter from "./Pokemon/PokemonProvider";
import Pokemon from "./Pokemon/Pokemon";
import PokemonProvider from "./Pokemon/PokemonProvider";

export {};

const express = require("express");
const app = express();
const PORT = 3000;
const query = require("./query/query");

app.listen(PORT, () => {
	console.log(`Example app listening on port ${PORT}`);
});

const { request } = require("graphql-request");
const pokeUrl = "https://beta.pokeapi.co/graphql/v1beta";

request(pokeUrl, query.byIdentifier("149")).then((data: any) => {
	const poke = new PokemonProvider().get(data.pokemon_v2_pokemon[0]);

	console.log(poke.getShinyArtwork());
});
