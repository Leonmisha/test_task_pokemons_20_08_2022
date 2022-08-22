import {  all, fork, ForkEffect } from 'redux-saga/effects';
import getAllPokemons from "./getAllPokemons";
import getPokemonTypes from "./getPokemonTypes";
import watchFilters from "./watchFilters";

const sagasEffects = [
    getAllPokemons,
    getPokemonTypes,
    watchFilters,
];



export default function* rootSaga(): any {
    yield all(sagasEffects.map((fn: any): ForkEffect => fork(fn)));

}