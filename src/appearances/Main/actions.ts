import { createAction } from "../../store/utils";
import { Pokemon } from "pokenode-ts";


const baseName = 'MAIN'


const MAIN = {
    SET_SEARCH_NAME: `${baseName}/SET_SEARCH_NAME`,
    SET_POKEMONS: `${baseName}/SET_POKEMONS`,
    SET_FILTER: `${baseName}/SET_FILTER`
}

export const setSearchName = createAction(
    MAIN.SET_SEARCH_NAME,
    (search: string) => ({
        search
    }),
);

export const setPokemons = createAction(
    MAIN.SET_POKEMONS,
    (pokemonsList: Pokemon[]) => ({
        pokemonsList
    })
);

export const setFilter = createAction(
    MAIN.SET_FILTER,
    (filterName: string, value: string) => ({
        filterName,
        value
    })
);

export default MAIN;