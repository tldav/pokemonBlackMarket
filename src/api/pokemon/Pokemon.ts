class Pokemon {
	private dexNo: string;
	private name: string;
	private height: string;
	private weight: string;
	private typeOne: string;
	private typeTwo: string | undefined;
	private stats: Map<string, number>;
	private dexEntry: string | undefined;

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

	public setDexEntry(dexEntry: string | undefined): void {
		this.dexEntry = dexEntry;
	}

	public getDexNo(): string {
		return this.dexNo;
	}

	public getName(): string {
		return this.name;
	}

	public getHeight(): string {
		return this.height;
	}

	public getWeight(): string {
		return this.weight;
	}

	public getTypeOne(): string {
		return this.typeOne;
	}

	public getTypeTwo(): string | undefined {
		return this.typeTwo;
	}

	public getStats(): Map<string, number> {
		return this.stats;
	}

	public getDexEntry(): string | undefined {
		return this.dexEntry ? this.dexEntry : undefined;
	}

	public getArtwork(): string {
		return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${this.dexNo}.png`;
	}
}

export default Pokemon;
