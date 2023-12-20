const query = require("../graphQL/query/query");
import DataFormatter from "./DataFormatter";

class PokemonService {
	private graphQL: any;

	constructor(graphQL: any) {
		this.graphQL = graphQL;
	}

	public async getByIdentifier(id: string): Promise<any> {
		const document = query.byIdentifier(id);
		const pokeInfo = await this.graphQL.req(document);
		return DataFormatter.format(pokeInfo.pokemon_v2_pokemon[0]);
	}

	public async getOrderedGroup(offset: string): Promise<any> {
		const document = query.byOffset(offset);
		const res = await this.graphQL.req(document);
		return res;
	}
}

export default PokemonService;
