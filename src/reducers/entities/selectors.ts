import { NamedAPIResource, Pokemon } from "pokenode-ts";

export const pokemonsSelector = (state: any): Record<Pokemon['id'], Pokemon> => state.entities.pokemons;

export const typesSelector = (state: any)
    :Record<NamedAPIResource['name'], NamedAPIResource['name']> => state.entities.types;

export const pokemonsDetailedSelector = (state: any): Record<Pokemon['id'], Pokemon> => state.entities.pokemonsDetailed;
