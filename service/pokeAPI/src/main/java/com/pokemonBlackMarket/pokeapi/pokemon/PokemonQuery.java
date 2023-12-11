package com.pokemonBlackMarket.pokeapi.pokemon;

public class PokemonQuery {
    private PokemonQuery() {
    }
    
    public static PokemonQuery getInstance() {
        return new PokemonQuery();
    }
    
    public String getNameOnly() {
        //language=GraphQL
        return """
                query {
                        pokemon_v2_pokemon(limit:1, where: {id: {_eq: 1}}) {
                            name
                        }
                    }
                """;
    }
}
