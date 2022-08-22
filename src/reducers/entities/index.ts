import ENTITIES from "./actions";

const initState = {
    pokemons: {},
    pokemonsDetailed: {},
    types: {}
}

const mergeTo = (from: any, to: any) => {
    const result: Record<string, any> = { }
    Object.keys(from).forEach(id => {
        result[id] = {
            ...to[id],
            ...from[id],
        }
    });
    Object.keys(to).forEach(id => {
        result[id] = {
            ...to[id],
            ...from[id],
        }
    })

    return result;
}

const main = (state = initState, action: any) => {
    switch (action.type) {
        case ENTITIES.ADD_POKEMONS:
            return {
                ...state,
                pokemons: mergeTo(action.payload.pokemonsList, state.pokemons),
            }
        case ENTITIES.ADD_TYPES:
            return {
                ...state,
                types: mergeTo(action.payload.typesList, state.types),
            }
        case ENTITIES.SET_POKEMON_DETAILED: {
            return {
                ...state,
                pokemonsDetailed: {
                    ...state.pokemonsDetailed,
                    [action.payload.id]: action.payload.pokemon,
                }
            }
        }
        default:
            return state;
    }
}

export default main