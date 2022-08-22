import { put, select } from "redux-saga/effects";
import { pokemonsSelector } from "../reducers/entities/selectors";
import { filtersSelector } from "../appearances/Main/selectors";
import { getCurrentPokemonsList } from "../utils";
import { setPokemons } from "../appearances/Main/actions";

function* setCurrentPokemons(): any {
    const allPokemons = yield select(pokemonsSelector);
    const filters = yield select(filtersSelector);
    const type = filters.type;
    const currentPokemons = getCurrentPokemonsList(allPokemons, {
        type
    });
    yield put(setPokemons(currentPokemons))
}

export default setCurrentPokemons;
