package com.pokemonBlackMarket.pokeapi.pokemon;

import com.pokemonBlackMarket.pokeapi.GQLClientProvider;
import org.springframework.graphql.client.HttpGraphQlClient;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Mono;

import java.util.List;

@Service
public class PokemonService {
    private final HttpGraphQlClient graphQlClient = GQLClientProvider.getInstance().getClient();
    private final PokemonQuery query = PokemonQuery.getInstance();

    public PokemonService() {
    }
    
    public Mono<List<Pokemon>> getPokemon() {
        String document = query.getNameOnly();
        return graphQlClient.document(document).retrieve("pokemon_v2_pokemon").toEntityList(Pokemon.class);
    }
}
