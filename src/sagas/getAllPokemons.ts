import { call, put } from "redux-saga/effects";
import { getPokemons } from "../api";
import { addPokemons } from "../reducers/entities/actions";
import setCurrentPokemons from "./setCurrentPokemons";

function* getAllPokemons(): any {
    const response = yield call(getPokemons);
    if (response.results) {
        yield put(addPokemons(response.results));
        yield call(setCurrentPokemons);
    }
}

export default getAllPokemons;