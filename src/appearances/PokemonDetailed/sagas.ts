import { take, put, call, select, all, fork } from "redux-saga/effects";
import POKEMON_DETAILED, { setCurrentPokemon, setCurrentPokemonName, setIsLoading } from "./actions";
import { getPokemon } from "../../api";
import { setPokemonDetailed } from "../../reducers/entities/actions";
import { pokemonsDetailedSelector } from "../../reducers/entities/selectors";

function* watchOpenPokemonDetailed(): any {
    while(true) {
        const {
            payload: {
                id: pokemonId,
                pokemonName,
            }
        } = yield take(POKEMON_DETAILED.OPEN_POKEMON_DETAILED);
        const pokemonsDetailed = yield select(pokemonsDetailedSelector);
        if (pokemonsDetailed[pokemonId]) {
            yield put(setCurrentPokemon(pokemonsDetailed[pokemonId]));
        } else {
            yield put(setIsLoading(true, pokemonName));
            const fullPokemonInfo = yield call(getPokemon, pokemonName);
            yield put(setPokemonDetailed(fullPokemonInfo.id, fullPokemonInfo));
            yield put(setCurrentPokemon(fullPokemonInfo));

            yield put(setIsLoading(false));
        }
    }
}

function* watchClosePokemonDetailed(): any {
    while(true) {
        yield take(POKEMON_DETAILED.CLOSE_POKEMON_DETAILED);
        yield put(setCurrentPokemon(null));
        yield put(setCurrentPokemonName(''));
    }
}

function* pokemonDetailsSagas(): any {
    yield all([watchOpenPokemonDetailed, watchClosePokemonDetailed].map(fork));
}


export default pokemonDetailsSagas;