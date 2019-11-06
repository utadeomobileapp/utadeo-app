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
  currentNumber: 0
})

/* ------------- Reducers ------------- */

export const retrieveResult = (state, {retrievedResult}) => {
  return state.merge({ currentNumber: retrievedResult })
}


/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [DummyTypes.RETRIEVE_RESULT]: retrieveResult
})
