import * as constants from '../constants/index'


export function increaseLevel()  { 
  return {
    type: constants.INCRESE_LEVEL
  }
}

export function decreaseLevel() { 
  return {
    type: constants.DECRESE_LEVEL
  }
}