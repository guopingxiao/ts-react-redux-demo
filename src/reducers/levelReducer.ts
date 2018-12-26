import { LevelState } from '../types/index'
import { INCRESE_LEVEL, DECRESE_LEVEL } from '../constants/index'

const initState = {
  name: 'TypeScript',
  level: 1
}

export default function levelReducer(state: LevelState = initState, action: any):LevelState { 
  switch (action.type) { 
    case INCRESE_LEVEL:
      return {
        ...state,
        level: state.level + 1
      }
    case DECRESE_LEVEL:
      return {
        ...state,
        level: Math.max(1, state.level - 1)
      }
    default:
      return state
  }
}