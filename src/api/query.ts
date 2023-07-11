import { gql } from "@apollo/client";

const query = {
	byId(id: string) {
		return gql(`
	{
		pokemon_v2_pokemon(limit: 1, where: { id: { _eq: ${id} } }) {
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
		pokemon_v2_pokemonspeciesdescription(limit: 1) {
			id
			pokemon_v2_language {
				name
				pokemon_v2_pokemonspeciesflavortexts(
					limit: 1
					where: { pokemon_species_id: { _eq: ${id} } }
				) {
					flavor_text
				}
			}
		}
	}
`);
	},
};

export default query;
