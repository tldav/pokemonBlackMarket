package com.pokemonBlackMarket.pokeapi.pokemon;

import org.springframework.data.repository.ListCrudRepository;

public interface PokemonRepository extends ListCrudRepository<Pokemon, Integer> {
}
