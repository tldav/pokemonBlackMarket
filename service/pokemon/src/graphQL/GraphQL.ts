import request from "graphql-request";

class GraphQL {
	private static BASE_URL = "https://beta.pokeapi.co/graphql/v1beta";

	public async req(document: any): Promise<any> {
		return await request(GraphQL.BASE_URL, document);
	}
}

export default GraphQL;
