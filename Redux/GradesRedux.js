import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'
import DebugConfig from '../Config/DebugConfig'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  getGradesUpdates: ['grades'],
  updateGrades: ['grades']
})

export const GradesTypes = Types
export default Creators

/* ------------- Initial State ------------- */
export const INITIAL_STATE = Immutable({
  // TODO: initial state for grades
  retrievedGrades: null,
  currentGrades: null
})

/* ------------- Reducers ------------- */

export const getGradesUpdates = (state, { grades }) => {
  return state.merge({ retrievedGrades: grades })
}

export const updateGrades = (state, { grades }) => {
  return state.merge({ currentGrades: grades })
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.RETRIEVE_GRADES]: getGradesUpdates,
  [Types.UPDATE_GRADES]: updateGrades
})
