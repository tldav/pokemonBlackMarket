import starterIds from "./starterId.json";
/**
 *
 *
 *
 * DO NOT DELETE - WILL NEED FOR FRONT END APP
 *
 *
 */
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
		dexNo: string,
		name: string,
		height: string,
		weight: string,
		typeOne: string,
		typeTwo: string | undefined,
		stats: any
	) {
		this.dexNo = dexNo;
		this.name = name;
		this.height = height;
		this.weight = weight;
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

	private isStarter(): boolean {
		return starterIds.includes(this.dexNo);
	}

	public getPrice(): number {
		const MODIFIER = this.getStatTotal() >= 600 || this.isStarter() ? 32 : 17;
		return (this.getStatTotal() * MODIFIER) / 1.1;
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
