import { combineReducers } from 'redux'
import configureStore from './CreateStore'
import rootSaga from '../sagas/'
import AppNavigator from '../navigation/AppNavigator'

const navReducer = (state, action) => {
  const newState = AppNavigator.router.getStateForAction(action, state)
  return newState || state
}

export default () => {
  /* ------------- Assemble The Reducers ------------- */
  const rootReducer = combineReducers({
    nav: navReducer,
    userData: require('./UserRedux').reducer,
    schedule: require('./ScheduleRedux').reducer,
    grades: require('./GradesRedux').reducer,
    dummy: require('./DummyRedux').reducer
  })

  return configureStore(rootReducer, rootSaga)
}
