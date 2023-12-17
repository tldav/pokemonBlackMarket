import { Pokemon, Stats } from "./types/Pokemon";
import { Info, Stat } from "./types/RawData";

class DataFormatter {
	public static get(data: Info): Pokemon {
		const { id: dexNo, name, weight, height } = data;
		const typeOne = data.pokemon_v2_pokemontypes[0].pokemon_v2_type.name;
		const typeTwo = data.pokemon_v2_pokemontypes[1]
			? data.pokemon_v2_pokemontypes[1].pokemon_v2_type.name
			: undefined;

		const stats = this.setStats(data.pokemon_v2_pokemonstats);

		return {
			dexNo,
			name,
			height,
			weight,
			typeOne,
			typeTwo,
			stats,
		};
	}

	private static setStats(stats: Array<Stat>): Stats {
		const hp = stats[0].base_stat;
		const atk = stats[1].base_stat;
		const def = stats[2].base_stat;
		const spAtk = stats[3].base_stat;
		const spDef = stats[4].base_stat;
		const speed = stats[5].base_stat;

		return {
			hp,
			atk,
			def,
			spAtk,
			spDef,
			speed,
		};
	}
}

export default DataFormatter;
