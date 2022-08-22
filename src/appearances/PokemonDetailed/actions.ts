import { Pokemon } from "pokenode-ts";
import { createAction } from "../../store/utils";


const baseName = 'POKEMON_DETAILED'


const POKEMON_DETAILED = {
    SET_CURRENT_POKEMON: `${baseName}/SET_CURRENT_POKEMON`,
    OPEN_POKEMON_DETAILED: `${baseName}/OPEN_POKEMON_DETAILED`,
    CLOSE_POKEMON_DETAILED: `${baseName}/CLOSE_POKEMON_DETAILED`,
    SET_IS_LOADING: `${baseName}/SET_IS_LOADING`,
    SET_CURRENT_POKEMON_NAME: `${baseName}/SET_CURRENT_POKEMON_NAME`,
}

export const setCurrentPokemon = createAction(
    POKEMON_DETAILED.SET_CURRENT_POKEMON,
    (pokemon: Pokemon[]) => ({
        pokemon
    })
);

export const openPokemonDetailed = createAction(POKEMON_DETAILED.OPEN_POKEMON_DETAILED,
    (id, pokemonName) => ({ id, pokemonName }));

export const closePokemonDetailed = createAction(POKEMON_DETAILED.CLOSE_POKEMON_DETAILED);

export const setIsLoading = createAction(POKEMON_DETAILED.SET_IS_LOADING,
    (isLoading, pokemonName) => ({ isLoading, pokemonName }));

export const setCurrentPokemonName = createAction(POKEMON_DETAILED.SET_CURRENT_POKEMON_NAME, name => ({ name }));

export default POKEMON_DETAILED;