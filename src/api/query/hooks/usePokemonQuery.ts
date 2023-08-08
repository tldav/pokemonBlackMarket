import { useQuery } from "@apollo/client";
import Pokemon from "@/api/pokemon/Pokemon";
import query from "../query";
import parsePokemonData from "@/api/pokemon/parsePokemonData";

function usePokemonQuery(identifier: string): Pokemon | undefined {
	const response = useQuery(query.byIdentifier(identifier));
	let pokemon;
	if (response.data) {
		pokemon = parsePokemonData(response.data.pokemon_v2_pokemon[0]);
	}

	return pokemon;
}

export default usePokemonQuery;
