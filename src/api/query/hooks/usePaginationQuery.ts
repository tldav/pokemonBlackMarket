import { useQuery } from "@apollo/client";
import Pokemon from "@/api/pokemon/Pokemon";
import query from "../query";
import parsePokemonData from "@/api/pokemon/parsePokemonData";

function usePaginationQuery(offset: string): Array<Pokemon> {
	const response = useQuery(query.byPage(offset));
	const pokeList: Array<Pokemon> = [];
	if (response.data) {
		response.data.pokemon_v2_pokemon.forEach((poke: any) => {
			pokeList.push(parsePokemonData(poke));
		});
	}

	return pokeList;
}

export default usePaginationQuery;
