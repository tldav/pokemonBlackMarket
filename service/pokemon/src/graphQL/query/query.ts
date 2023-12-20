const { gql } = require("graphql-request");

const query = {
	byIdentifier(searchParam: string) {
		const IDENTIFIER = parseInt(searchParam) ? "id" : "name";

		return gql`
	{
		pokemon_v2_pokemon(limit: 1, where: { ${IDENTIFIER}: { _eq: ${searchParam} } }) {
			id
			name
			height
			weight
			pokemon_v2_pokemontypes {
				pokemon_v2_type {
					name
				}
			}
			pokemon_v2_pokemonstats {
				base_stat
			}
		}
	}
`;
	},
	byOffset(offset: string) {
		return gql`
			{
				pokemon_v2_pokemon(limit: 20, offset: ${offset}) {
					id
					pokemon_species_id
					name
					height
					weight
					pokemon_v2_pokemontypes {
						pokemon_v2_type {
							name
						}
					}
					pokemon_v2_pokemonstats {
						base_stat
					}
				}
			}
		`;
	},
	forDexEntry(id: string | undefined) {
		return gql`
			{
				pokemon_v2_pokemonspeciesdescription(limit: 1) {
					pokemon_v2_language {
						pokemon_v2_pokemonspeciesflavortexts(
							limit: 1
							where: { pokemon_species_id: { _eq: ${id} } }
						) {
							flavor_text
						}
					}
				}
			}
		`;
	},
};

module.exports = query;
