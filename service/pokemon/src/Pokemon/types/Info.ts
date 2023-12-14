type Stat = {
	base_stat: number;
};

type Type = {
	pokemon_v2_type: {
		name: string;
	};
};
type Info = {
	id: number;
	name: string;
	height: number;
	weight: number;
	pokemon_v2_pokemontypes: Array<Type>;
	pokemon_v2_pokemonstats: Array<Stat>;
};

export { Info, Stat, Type };
