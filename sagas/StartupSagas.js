import { put } from 'redux-saga/effects'
import ScheduleActions from '../redux/UserRedux'
//import LocationActions from '../Redux/GradesRedux'

// process STARTUP actions
export function * startup (action) {
  yield put(UserRedux.getUser(/* here the user and password should be passed */))
  /* ********************************************************
  * Readonly API Calls are better handled through code push *
  * *********************************************************/
}
