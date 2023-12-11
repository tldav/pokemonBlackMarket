package com.pokemonBlackMarket.pokeapi.pokemon;

import org.springframework.graphql.client.HttpGraphQlClient;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;

import java.util.List;

@Service
public class PokemonService {
    private final HttpGraphQlClient graphQlClient;
    private final PokemonQuery query = PokemonQuery.getInstance();

    public PokemonService() {
        WebClient client = WebClient.builder().baseUrl("https://beta.pokeapi.co/graphql/v1beta/").build();
        graphQlClient = HttpGraphQlClient.builder(client).build();
    }
    
    public Mono<List<Pokemon>> getPokemon() {
        //language=GraphQL
        String document = query.getNameOnly();
        return graphQlClient.document(document).retrieve("pokemon_v2_pokemon").toEntityList(Pokemon.class);
    }
}
