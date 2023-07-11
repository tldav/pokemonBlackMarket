import { useQuery } from "@apollo/client";
import Pokemon from "./Pokemon";
import query from "./query";

function usePokemonQuery(id: string): Pokemon | undefined {
	const meh = useQuery(query.byId(id));

	const stats = new Map<string, number>();

	let charizard;

	if (meh.data) {
		const poke = meh.data.pokemon_v2_pokemon[0];
		const { id: dexNo, name, weight, height } = poke;
		const typeOne = poke.pokemon_v2_pokemontypes[0].pokemon_v2_type.name;
		const typeTwo = poke.pokemon_v2_pokemontypes[1]
			? poke.pokemon_v2_pokemontypes[1].pokemon_v2_type.name
			: undefined;
		const hp = poke.pokemon_v2_pokemonstats[0].base_stat;
		const atk = poke.pokemon_v2_pokemonstats[1].base_stat;
		const def = poke.pokemon_v2_pokemonstats[2].base_stat;
		const spAtk = poke.pokemon_v2_pokemonstats[3].base_stat;
		const spDef = poke.pokemon_v2_pokemonstats[4].base_stat;
		const speed = poke.pokemon_v2_pokemonstats[5].base_stat;
		stats
			.set("HP", hp)
			.set("Attack", atk)
			.set("Defense", def)
			.set("Sp. Attack", spAtk)
			.set("Sp. Defense", spDef)
			.set("Speed", speed);

		// ============================================================

		const dexEntry =
			meh.data.pokemon_v2_pokemonspeciesdescription[0].pokemon_v2_language
				.pokemon_v2_pokemonspeciesflavortexts[0].flavor_text;

		charizard = new Pokemon(
			dexNo,
			name,
			height.toString(),
			weight.toString(),
			typeOne,
			typeTwo,
			stats,
			dexEntry
		);

		// charizard = new Pokemon()
	}

	return charizard;
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
