
import { combineReducers } from 'redux'
import levelReducer from './levelReducer'

const reducers = combineReducers({
	levelState: levelReducer
})

export default reducers





