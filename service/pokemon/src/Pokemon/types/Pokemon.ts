type Stats = {
	hp: number;
	atk: number;
	def: number;
	spAtk: number;
	spDef: number;
	speed: number;
};

type Pokemon = {
	dexNo: number;
	name: string;
	height: number;
	weight: number;
	typeOne: string;
	typeTwo: string | undefined;
	stats: Stats;
};

export { Pokemon, Stats };
