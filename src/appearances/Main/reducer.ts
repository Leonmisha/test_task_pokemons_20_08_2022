import MAIN from "./actions";

const initState = {
    search: '',
    page: 0,
    pageSize: 2000,
    pokemonsList: [],
    filters: {
        type: '',
    }
}

const main = (state = initState, action: any) => {
    switch (action.type) {
        case MAIN.SET_SEARCH_NAME:
            return {
                ...state,
                search: action.payload.search,
            }
        case MAIN.SET_POKEMONS:
            return {
                ...state,
                pokemonsList: action.payload.pokemonsList,
            }
        case MAIN.SET_FILTER:
            return {
                ...state,
                filters: {
                    ...state.filters,
                    [action.payload.filterName]: action.payload.value,
                }
            }
        default:
            return state;
    }
}

export default main