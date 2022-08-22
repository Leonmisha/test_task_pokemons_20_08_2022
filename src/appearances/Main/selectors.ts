import { Pokemon } from "pokenode-ts";

export const searchSelector = (state: any): string => state.main.search;

export const pokemonsListSelector = (state: any): Pokemon[] => state.main.pokemonsList;

export const filtersSelector = (state: any) => state.main.filters;
