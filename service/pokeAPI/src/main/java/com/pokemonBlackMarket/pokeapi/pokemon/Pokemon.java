package com.pokemonBlackMarket.pokeapi.pokemon;

import org.springframework.data.annotation.Id;

public record Pokemon(
        @Id
        Integer id,
        String name
) {

}
