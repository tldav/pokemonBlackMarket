import { Express, Request, Response } from "express";
import PokemonService from "./Pokemon/PokemonService";

const express = require("express");
const app: Express = express();
const PORT: number = 3000;

app.listen(PORT, () => {
	console.log(`Example app listening on port ${PORT}`);
});

const service: PokemonService = new PokemonService();

app.get("/pokemon/:id", async (req: Request, res: Response) => {
	res.json(await service.getByIdentifier(req.params.id));
});
