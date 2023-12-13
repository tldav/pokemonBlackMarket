const express = require("express");
const app = express();
const port = 3000;

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});

const { request, gql } = require("graphql-request");
const pokeUrl = "https://beta.pokeapi.co/graphql/v1beta";

const query = gql`
	{
		pokemon_v2_pokemon(limit: 1, where: { id: { _eq: 1 } }) {
			name
			pokemon_v2_pokemontypes {
				pokemon_v2_type {
					name
				}
			}
		}
	}
`;

app.get("/", (req, res) => {
	request(pokeUrl, query).then((data) => res.json(data));
});
