class Pokemon {
	private dexNo: string;
	private name: string;
	private height: string;
	private weight: string;
	private typeOne: string;
	private typeTwo: string | undefined;
	private stats: Map<string, number>;
	private dexEntry: string | undefined;

	private static BASE_ARTWORK_URL: string =
		"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/";

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

	public getArtwork(): string {
		return Pokemon.BASE_ARTWORK_URL + this.dexNo + ".png";
	}

	public getShinyArtwork(): string {
		return Pokemon.BASE_ARTWORK_URL + "/shiny/" + this.dexNo + ".png";
	}

	public getPrice(): number {
		const MODIFIER = this.getStatTotal() >= 600 ? 32 : 17;

		const hui: number = (this.getStatTotal() * MODIFIER) / 1.1;

		return hui;
	}

	public getStatTotal(): number {
		let statTotal = 0;

		this.stats.forEach((stat: number) => {
			statTotal += stat;
		});
		return statTotal;
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
}

export default Pokemon;
