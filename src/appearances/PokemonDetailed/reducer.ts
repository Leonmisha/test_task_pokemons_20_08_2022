import POKEMON_DETAILED from "./actions";

const initState = {
    currentPokemon: null,
    isLoading: false,
    name: ''
}

const pokemonDetailed = (state = initState, action: any) => {
    switch (action.type) {
        case POKEMON_DETAILED.SET_CURRENT_POKEMON:
            return {
                ...state,
                currentPokemon: action.payload.pokemon,
            }
        case POKEMON_DETAILED.SET_IS_LOADING:
            return {
                ...state,
                isLoading: action.payload.isLoading,
                name: action.payload.pokemonName ?? state.name,
            }
        default:
            return state;
    }
}

export default pokemonDetailed;
