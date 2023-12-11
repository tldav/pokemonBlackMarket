package com.pokemonBlackMarket.pokeapi.pokemon;

import org.springframework.web.bind.annotation.RestController;

@RestController
public class PokemonController {

    PokemonService pokemonService = new PokemonService();
//
//    @GetMapping("/")
//    Pokemon getPokemon() {
//        return pokemonService.getPokemon();
//    }
}
