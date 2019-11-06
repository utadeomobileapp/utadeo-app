import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'
import DebugConfig from '../Config/DebugConfig'
import { createTypes } from 'reduxsauce'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  hadleError: ['error']
},{})

export const ErrorTypes = createTypes(`
    HANDLE_ERROR
    `, {}
)
export default Creators

/* ------------- Initial State ------------- */
export const INITIAL_STATE = Immutable({
  error: null
})

/* ------------- Reducers ------------- */

export const handleError = (state, {error}) => {
  console.warn(error);
  return state.merge({ error: error })}


/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [ErrorTypes.HANDLE_ERROR]: handleError
})
