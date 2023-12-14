import Pokemon from "./Pokemon";
import { Info, Stat } from "./types/Info";

class PokemonProvider {
	// private data: Info;

	// constructor(data: Info) {
	// 	this.data = data;
	// }

	public get(data: Info): Pokemon {
		const { id: dexNo, name, weight, height } = data;
		const typeOne = data.pokemon_v2_pokemontypes[0].pokemon_v2_type.name;
		const typeTwo = data.pokemon_v2_pokemontypes[1]
			? data.pokemon_v2_pokemontypes[1].pokemon_v2_type.name
			: undefined;

		const stats: Array<Stat> = data.pokemon_v2_pokemonstats;

		return new Pokemon(
			dexNo.toString(),
			name,
			height.toString(),
			weight.toString(),
			typeOne,
			typeTwo,
			this.setStats(stats)
		);
	}

	private setStats(stats: Array<Stat>): Map<string, number> {
		const hp = stats[0].base_stat;
		const atk = stats[1].base_stat;
		const def = stats[2].base_stat;
		const spAtk = stats[3].base_stat;
		const spDef = stats[4].base_stat;
		const speed = stats[5].base_stat;

		return new Map<string, number>([
			["HP", hp],
			["Attack", atk],
			["Defense", def],
			["Sp. Attack", spAtk],
			["Sp. Defense", spDef],
			["speed", speed],
		]);
	}
}

export default PokemonProvider;
