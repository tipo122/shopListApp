import { combineReducers } from 'redux'
import { todoReducer } from './modules/ToDo/store/reducer'

export type RootState = {
    appState: any
}

const reducers = combineReducers({
    appState: todoReducer
});

export default reducers
