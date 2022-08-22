import { combineReducers } from "redux";
import main from "../appearances/Main/reducer";
import entities from './entities'


const rootReducer = combineReducers({
    main,
    entities,
});

export default rootReducer;