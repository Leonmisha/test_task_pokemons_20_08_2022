import { call, put } from "redux-saga/effects";
import { getPokemonTypes as getTypes } from "../api";
import { addTypes } from "../reducers/entities/actions";

function* getPokemonTypes(): any {
    const response = yield call(getTypes);
    if (response.results) {
        yield put(addTypes(response.results));
    }
}

export default getPokemonTypes;