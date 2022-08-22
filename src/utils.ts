import { Pokemon } from "pokenode-ts";


export const getCurrentPokemonsList = (allPokemons: Record<Pokemon['id'], Pokemon>, {
    type = '',
}) => {
    return Object.values(allPokemons)
        .filter(
            ({ types }) => {
                return !type || types?.some(typeRecord => typeRecord.type.name === type)
            }
        )
        .sort((a, b) => a.id - b.id);
}