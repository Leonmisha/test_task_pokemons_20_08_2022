import { PokemonClient, NamedAPIResource } from "pokenode-ts";


export const api = new PokemonClient({
    cacheOptions: { maxAge: 3e5, exclude: { query: false } }
});

const normalizeNamingEntities = (list: NamedAPIResource[]) => {
    return list.reduce((acc: any, pokemon) => {
        const pokemonId = pokemon.url.split('/').at(-2) ?? pokemon.name;
        acc[pokemonId] = { ...pokemon, id: pokemonId };
        return acc;
    }, {})
}

export const getPokemons = async (page = 0, pageSize = 2000) => {
    try {
        const responseFromServer = await api.listPokemons(page, pageSize);
        const normalizedBasicPokemons = normalizeNamingEntities(responseFromServer.results);

        return {
            ...responseFromServer,
            results: normalizedBasicPokemons
        }
    }
    catch(err: any) {
        alert(err.message);
        return err;
    }
}

export const getPokemonsByType = async (name: string) => {
    try {
        const responseFromServer = await api.getTypeByName(name);
        const pokemonsByType = responseFromServer.pokemon.map((typePokemon) => ({
            ...typePokemon.pokemon,
            types: [
                {
                    slot: typePokemon.slot,
                    type: {
                        name: responseFromServer.name,
                        id: responseFromServer.id,
                    },
                }
            ],
        }));
        const normalizedBasicPokemons = normalizeNamingEntities(pokemonsByType);

        return normalizedBasicPokemons;
    }
    catch(err: any) {
        alert(err.message);
        return err;
    }
}

export const getPokemonTypes = async () => {
    try {
        const responseFromServer = await api.listTypes(0, 200);
        const normalizedTypes = normalizeNamingEntities(responseFromServer.results);

        return {
            ...responseFromServer,
            results: normalizedTypes
        }
    }
    catch(err: any) {
        alert(err.message);
        return err;
    }
}