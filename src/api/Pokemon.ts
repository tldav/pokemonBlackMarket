class Pokemon {
	dexNo: string;
	name: string;
	height: string;
	weight: string;
	typeOne: string;
	typeTwo: string | undefined;
	stats: Map<string, number>;
	dexEntry: string;

	constructor(
		dexNo: string,
		name: string,
		height: string,
		weight: string,
		typeOne: string,
		typeTwo: string | undefined,
		stats: Map<string, number>,
		dexEntry: string
	) {
		this.dexNo = dexNo;
		this.name = name;
		this.height = height;
		this.weight = weight;
		this.typeOne = typeOne;
		this.typeTwo = typeTwo;
		this.stats = stats;
		this.dexEntry = dexEntry;
	}

	getArtwork(): string {
		return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${this.dexNo}.png`;
	}
}

export default Pokemon;
