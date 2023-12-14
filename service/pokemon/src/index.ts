export {};

const express = require("express");
const app = express();
const PORT = 3000;
const query = require("./query/query");

app.listen(PORT, () => {
	console.log(`Example app listening on port ${PORT}`);
});

const { request } = require("graphql-request");
const pokeUrl = "https://beta.pokeapi.co/graphql/v1beta";

request(pokeUrl, query.byIdentifier(46)).then((data: any) => console.log(data));
