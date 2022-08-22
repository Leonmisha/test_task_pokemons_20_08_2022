import ENTITIES from "./actions";

const initState = {
    pokemons: {},
    types: {}
}

const mergeTo = (from: any, to: any) => {
    const result = { ...to }
    Object.keys(from).forEach(entity => {
        result[from] = {
            ...to[from],
            ...from[entity],
        }
    });

    return result;
}

const main = (state = initState, action: any) => {
    switch (action.type) {
        case ENTITIES.ADD_POKEMONS:
            return {
                ...state,
                pokemons: mergeTo(state.pokemons, action.payload.pokemonsList),
            }
        case ENTITIES.ADD_TYPES:
            return {
                ...state,
                types: mergeTo(state.types, action.payload.typesList),
            }
        default:
            return state;
    }
}

export default main