import Pokemon from "./Pokemon";

const parsePokemonData = (pokeData: any): Pokemon => {
	// const poke = response.data.pokemon_v2_pokemon[0]; // <- send this in as arg

	const { id: dexNo, name, weight, height } = pokeData;
	const typeOne = pokeData.pokemon_v2_pokemontypes[0].pokemon_v2_type.name;
	const typeTwo = pokeData.pokemon_v2_pokemontypes[1]
		? pokeData.pokemon_v2_pokemontypes[1].pokemon_v2_type.name
		: undefined;
	const hp = pokeData.pokemon_v2_pokemonstats[0].base_stat;
	const atk = pokeData.pokemon_v2_pokemonstats[1].base_stat;
	const def = pokeData.pokemon_v2_pokemonstats[2].base_stat;
	const spAtk = pokeData.pokemon_v2_pokemonstats[3].base_stat;
	const spDef = pokeData.pokemon_v2_pokemonstats[4].base_stat;
	const speed = pokeData.pokemon_v2_pokemonstats[5].base_stat;

	const stats = new Map<string, number>();
	stats
		.set("HP", hp)
		.set("Attack", atk)
		.set("Defense", def)
		.set("Sp. Attack", spAtk)
		.set("Sp. Defense", spDef)
		.set("Speed", speed);

	return new Pokemon(
		dexNo,
		name,
		height.toString(),
		weight.toString(),
		typeOne,
		typeTwo,
		stats,
		""
	);
};

export default parsePokemonData;
