import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'
import DebugConfig from '../Config/DebugConfig'
import { createTypes } from 'reduxsauce'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  getUser: ['user'],
  updateUser: ['user']
})

export const UserTypes = createTypes(`
    RETRIEVE_USER
    UPDATE_USER
    `, {}
)
export default Creators

/* ------------- Initial State ------------- */
export const INITIAL_STATE = Immutable({
  // TODO: initial state for user
  retrievedUser: null,
  currentUser: null
})

/* ------------- Reducers ------------- */

export const getUser = (state, { user }) => {
  return state.merge({ retrievedUser: user })
}

export const updateUser = (state, { user }) => {
  return state.merge({ currentUser: user })
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [UserTypes.RETRIEVE_USER]: getUser,
  [UserTypes.UPDATE_USER]: updateUser
})
