import { combineReducers } from "redux";
import main from "../appearances/Main/reducer";
import entities from './entities'
import pokemonDetailed from "../appearances/PokemonDetailed/reducer";


const rootReducer = combineReducers({
    main,
    entities,
    pokemonDetailed,
});

export default rootReducer;