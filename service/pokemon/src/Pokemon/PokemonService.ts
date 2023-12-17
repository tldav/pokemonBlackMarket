const query = require("../graphQL/query/query");
import GraphQL from "../graphQL/GraphQL";
import DataFormatter from "./DataFormatter";

class PokemonService {
	private graphQL: GraphQL = new GraphQL();

	public async getByIdentifier(id: string): Promise<any> {
		const document = query.byIdentifier(id);
		const pokeInfo = await this.graphQL.req(document);
		return DataFormatter.format(pokeInfo.pokemon_v2_pokemon[0]);
	}
}

export default PokemonService;
