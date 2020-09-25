import {combineReducers} from 'redux'
import songReducer from './songReducer';

const reducer=combineReducers({
    songReducer,
})

export default reducer;