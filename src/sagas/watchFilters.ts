import { call, put, select, take } from "redux-saga/effects";
import { getPokemonsByType } from "../api";
import { addPokemons } from "../reducers/entities/actions";
import MAIN from "../appearances/Main/actions";
import { filtersSelector } from "../appearances/Main/selectors";
import setCurrentPokemons from "./setCurrentPokemons";

function* watchFilters(): any {
    while (true) {
        yield take(MAIN.SET_FILTER);
        const filters = yield select(filtersSelector);
        if (filters.type) {
            const pokemonsByType = yield call(getPokemonsByType, filters.type);
            yield put(addPokemons(pokemonsByType));
        }
        yield call(setCurrentPokemons)
    }
}

export default watchFilters;