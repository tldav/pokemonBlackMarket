package com.pokemonBlackMarket.pokeapi;

import com.pokemonBlackMarket.pokeapi.pokemon.Pokemon;
import com.pokemonBlackMarket.pokeapi.pokemon.PokemonRepository;
import com.pokemonBlackMarket.pokeapi.pokemon.PokemonService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import reactor.core.publisher.Mono;

import java.util.List;

@SpringBootApplication
public class PokeApiApplication {
    
    public static void main(String[] args) {
        SpringApplication.run(PokeApiApplication.class, args);
    }
    
    @Bean
    CommandLineRunner commandLineRunner(PokemonService service, PokemonRepository repository) {
        return args -> {
            Mono<List<Pokemon>> pikachu = service.getPokemon();
            pikachu.subscribe(repository::saveAll);
        };
    }
    
    
}
