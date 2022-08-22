import { createAction } from "../../store/utils";

const baseName = 'ENTITIES'


const ENTITIES = {
    ADD_POKEMONS: `${baseName}/ADD_POKEMONS`,
    ADD_TYPES: `${baseName}/ADD_TYPES`,
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

export default ENTITIES;
