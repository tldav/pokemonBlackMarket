import { useQuery } from "@apollo/client";
import Pokemon from "./Pokemon";
import query from "./query";

function usePaginationQuery(offset: string): Array<Pokemon> {
	const meh = useQuery(query.byPage(offset));
	const pokeList: Array<Pokemon> = [];
	let group;
	if (meh.data) {
		group = meh.data.pokemon_v2_pokemon;
		group.forEach((poke: any) => {
			const stats = new Map<string, number>();
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

			const hi = new Pokemon(
				dexNo,
				name,
				height.toString(),
				weight.toString(),
				typeOne,
				typeTwo,
				stats,
				""
			);

			pokeList.push(hi);
		});
	}

	return pokeList;
}

export default usePaginationQuery;
