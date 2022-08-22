import {  all, fork, ForkEffect } from 'redux-saga/effects';
import getAllPokemons from "./getAllPokemons";
import getPokemonTypes from "./getPokemonTypes";
import watchFilters from "./watchFilters";
import pokemonDetailsSagas from "../appearances/PokemonDetailed/sagas";

const sagasEffects = [
    getAllPokemons,
    getPokemonTypes,
    watchFilters,
    pokemonDetailsSagas,
];



export default function* rootSaga(): any {
    yield all(sagasEffects.map((fn: any): ForkEffect => fork(fn)));

}