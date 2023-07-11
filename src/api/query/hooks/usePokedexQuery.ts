import { useQuery } from "@apollo/client";
import query from "../query";

function usePokedexQuery(id: string | undefined): string {
	const response = useQuery(query.forDexEntry(id));
	let dexEntry;
	if (response.data) {
		dexEntry =
			response.data.pokemon_v2_pokemonspeciesdescription[0].pokemon_v2_language
				.pokemon_v2_pokemonspeciesflavortexts[0].flavor_text;
	}

	return dexEntry;
}

export default usePokedexQuery;
