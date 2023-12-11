package com.pokemonBlackMarket.pokeapi;

import org.springframework.graphql.client.HttpGraphQlClient;
import org.springframework.web.reactive.function.client.WebClient;

public class GQLClientProvider {
    private GQLClientProvider() {
    }
    
    public static GQLClientProvider getInstance() {
        return new GQLClientProvider();
    }
    
    public HttpGraphQlClient getClient() {
        WebClient client = WebClient.builder().baseUrl("https://beta.pokeapi.co/graphql/v1beta/").build();
        return HttpGraphQlClient.builder(client).build();
    }
    
}
