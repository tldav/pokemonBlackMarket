class Pokemon {
	dexNo: string;
	name: string;
	height: string;
	weight: string;
	typeOne: string;
	typeTwo: string | undefined;
	stats: Map<string, number>;
	dexEntry: string | undefined;

	constructor(
		dexNo: number,
		name: string,
		height: number,
		weight: number,
		typeOne: string,
		typeTwo: string | undefined,
		stats: Map<string, number>
	) {
		this.dexNo = dexNo.toString();
		this.name = name;
		this.height = height.toString();
		this.weight = weight.toString();
		this.typeOne = typeOne;
		this.typeTwo = typeTwo;
		this.stats = stats;
	}

	getArtwork(): string {
		return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${this.dexNo}.png`;
	}

	setDexEntry(dexEntry: string | undefined): void {
		this.dexEntry = dexEntry;
	}
}

export default Pokemon;
