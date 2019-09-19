import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'
import DebugConfig from '../Config/DebugConfig'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  setSelectedEvent: ['event'],
  clearSelectedEvent: null,
  updateSchedule: ['schedule'],
  getScheduleUpdates: ['schedule']
})

export const ScheduleTypes = Types
export default Creators

/* ------------- Initial State ------------- */
export const INITIAL_STATE = Immutable({
  // TODO: initial state for schedule
  selectedEvent: null,
  retrievedSchedule: null,
  userSchedule: null
})

/* ------------- Reducers ------------- */

export const setSelectedEvent = (state, { event }) => {
  return state.merge({ selectedEvent: event })
}

export const clearSelectedEvent = (state) => {
  return state.merge({ selectedEvent: null })
}

export const getScheduleUpdates = (state, { schedule }) => {
  return state.merge({ retrievedSchedule: schedule })
}

export const updateSchedule = (state, { schedule }) => {
  return state.merge({ userSchedule: schedule })
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.RETRIEVE_SHEDULE]: getScheduleUpdates,
  [Types.UPDATE_SCHEDULE]: updateSchedule
})
