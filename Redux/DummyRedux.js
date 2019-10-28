import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'
import DebugConfig from '../Config/DebugConfig'
import { createTypes } from 'reduxsauce'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  add: ['numbers'],
  divide: ['numbers'],
  subtract: ['numbers'],
  multiply: ['numbers'],
  retrieveResult:['retrievedResult']
},{})

export const DummyTypes = createTypes(`
    ADD
    DIVIDE
    MULTIPLY
    SUBTRACT
    RETRIEVE_RESULT
    `, {}
)
export default Creators

/* ------------- Initial State ------------- */
export const INITIAL_STATE = Immutable({
  // TODO: initial state for dummy numbers
  numbers: null,
  currentNumber: null
})

/* ------------- Reducers ------------- */

export const add = (state, {numbers}) => {
  return state.merge({ numbers: numbers })
}

export const divide = (state, {numbers}) => {
  return state.merge({ numbers: numbers })
}

export const multiply = (state, {numbers}) => {
  return state.merge({ numbers: numbers })
}

export const subtract = (state, {numbers}) => {
  return state.merge({ numbers: numbers })
}

export const retrieveResult = (state, {retrievedResult}) => {
  console.log("retrieving result "+retrievedResult);
  return state.merge({ currentNumber: retrievedResult })
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [DummyTypes.ADD]: add,
  [DummyTypes.DIVIDE]: divide,
  [DummyTypes.MULTIPLY]: multiply,
  [DummyTypes.SUBTRACT]: subtract,
  [DummyTypes.RETRIEVE_RESULT]: retrieveResult
})
