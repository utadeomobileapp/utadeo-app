import { takeLatest, all } from 'redux-saga/effects'

/* ------------- Types ------------- */

import { StartupTypes } from '../redux/StartupRedux'
import { ScheduleTypes } from '../redux/ScheduleRedux'
import { GradesTypes } from '../redux/GradesRedux'
import { DummyTypes} from '../redux/DummyRedux'

/* ------------- Sagas ------------- */
//TODO config sagas
import { addSaga, divideSaga, subtractSaga, multiplySaga } from './DummySagas'
import {getGradesSaga } from './GradesSagas'

/* ------------- API ------------- */
//TODO API should be transormed into soap calls import API from '../Services/Api'
import DebugConfig from '../Config/DebugConfig'
// const api = API.create()

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
//const api = DebugConfig.useFixtures ? FixtureAPI : API.create()

/* ------------- Connect Types To Sagas ------------- */

export default function * root () {
  let sagaIndex = [
    // some sagas only receive an action
    //takeLatest(StartupTypes.STARTUP, startup)// 2 redux
    takeLatest(DummyTypes.ADD,  addSaga),
    takeLatest(DummyTypes.DIVIDE,  divideSaga),
    takeLatest(DummyTypes.SUBTRACT,  subtractSaga),
    takeLatest(DummyTypes.MULTIPLY,  multiplySaga),
    takeLatest(GradesTypes.GET_GRADES, getGradesSaga)
  ]

  // debug conditional API calls
  if (DebugConfig.getAPI) {
    //sagaIndex.push(takeLatest(ScheduleTypes.GET_SCHEDULE_UPDATES, getScheduleUpdates, api))
    //sagaIndex.push(takeLatest(LocationTypes.GET_NEARBY_UPDATES, getNearbyUpdates, api))
  }


  yield all(sagaIndex)
}
