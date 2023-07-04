"use client";
import RocketLogoRegion from "./rocketLogo/RocketLogoRegion";
import "./navRegion.css";
import PokeballIconRegion from "./pokeballIcon/PokeballIconRegion";
import { gql, useQuery } from "@apollo/client";

// import printCharizard from "../../api/meh";

const CHARIZARD_QUERY = gql`
	{
		pokemon_v2_pokemon(limit: 1, where: { id: { _eq: 6 } }) {
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
				pokemon_v2_stat {
					name
				}
				base_stat
			}
		}
		pokemon_v2_pokemonspeciesdescription(limit: 1) {
			id
			pokemon_v2_language {
				name
				pokemon_v2_pokemonspeciesflavortexts(
					limit: 1
					where: { pokemon_species_id: { _eq: 6 } }
				) {
					flavor_text
				}
			}
		}
	}
`;

function NavRegion() {
	const { data, loading: isLoading } = useQuery(CHARIZARD_QUERY);
	console.log(data);

	return (
		<nav id="nav-region">
			<RocketLogoRegion />
			<PokeballIconRegion />
		</nav>
	);
}

export default NavRegion;
