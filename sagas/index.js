import { takeLatest } from 'redux-saga/effects'

/* ------------- Types ------------- */

import { StartupTypes } from '../Redux/StartupRedux'
import { ScheduleTypes } from '../Redux/ScheduleRedux'
import { GradesTypes } from '../Redux/GradesRedux'

/* ------------- Sagas ------------- */
//TODO config sagas
import { startup } from './StartupSagas'
import { trackCurrentTime } from './ScheduleSagas'
import { getScheduleUpdates } from './ScheduleUpdateSagas'
import { getNearbyUpdates } from './GradesSagas'

/* ------------- API ------------- */
//TODO API should be transormed into soap calls
import API from '../Services/Api'
import DebugConfig from '../Config/DebugConfig'
// const api = API.create()

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
const api = DebugConfig.useFixtures ? FixtureAPI : API.create()

/* ------------- Connect Types To Sagas ------------- */

export default function * root () {
  let sagaIndex = [
    // some sagas only receive an action
    takeLatest(StartupTypes.STARTUP, startup)
  ]

  // debug conditional API calls
  if (DebugConfig.getAPI) {
    sagaIndex.push(takeLatest(ScheduleTypes.GET_SCHEDULE_UPDATES, getScheduleUpdates, api))
    sagaIndex.push(takeLatest(LocationTypes.GET_NEARBY_UPDATES, getNearbyUpdates, api))
  }

  yield sagaIndex
}
