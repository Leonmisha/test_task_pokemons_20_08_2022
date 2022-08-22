import { createAction } from "../../store/utils";

const baseName = 'ENTITIES'


const ENTITIES = {
    ADD_POKEMONS: `${baseName}/ADD_POKEMONS`,
    ADD_TYPES: `${baseName}/ADD_TYPES`,
    SET_POKEMON_DETAILED: `${baseName}/SET_POKEMON_DETAILED`,
}

export const addPokemons = createAction(
    ENTITIES.ADD_POKEMONS,
    (pokemonsList) => ({
        pokemonsList
    }),
);

export const addTypes = createAction(
    ENTITIES.ADD_TYPES,
    (typesList) => ({
        typesList
    }),
);

export const setPokemonDetailed = createAction(
    ENTITIES.SET_POKEMON_DETAILED,
    (id, pokemon) => ({
        id,
        pokemon,
    }),
);

export default ENTITIES;
