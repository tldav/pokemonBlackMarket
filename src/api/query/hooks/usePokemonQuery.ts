import { useQuery } from "@apollo/client";
import Pokemon from "@/api/pokemon/Pokemon";
import query from "../query";
import parsePokemonData from "@/api/pokemon/parsePokemonData";

function usePokemonQuery(id: string): Pokemon | undefined {
	const response = useQuery(query.byId(id));
	let pokemon;
	if (response.data) {
		pokemon = parsePokemonData(response.data.pokemon_v2_pokemon[0]);
	}

	return pokemon;
}

export default usePokemonQuery;

/**
 * randos:
 *  25 (pikachu), 26 (raichu)
 *  133 (eevee):
 *    134 (vaporeon)
 *    135 (jolteon)
 *    136 (flareon)
 *    196 (espeon)
 *    197 (umbreon)
 *    470 (leafeon)
 *    471 (glaceon)
 *    700 (sylveon)
 *
 * gen 1:
 *  1 (bulbasaur) through and include 9 (blastoise)
 * gen 2:
 *  152 (chickorita) through and include 160 (feraligatr)
 * gen 3:
 *  252 (treeko) through and include 260 (swampert)
 * gen 4:
 *  387 (turtwig) through and include 395 (empoleon)
 * gen 5:
 *  495 (snizy) through and include 503 (samurott)
 * gen 6:
 *  650 (chespin) through and include 658 (greninja)
 * gen 7:
 *  722 (rowlet) through and include 730 (primarina)
 * gen 8:
 *  810 (grookey) through and include 818 (inteleon)
 * gen 9:
 *  906 (sprigatito) through and include 914 (quaquaval)
 */
