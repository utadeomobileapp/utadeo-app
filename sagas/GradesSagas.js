import { call, put, delay } from 'redux-saga/effects'
import {GradesTypes} from '../redux/GradesRedux'
import GradesActions from '../redux/GradesRedux'
import {ErrorTypes} from '../redux/ErrorRedux'
import ErrorActions from '../redux/ErrorRedux'
import { fuListaNotas, waitUntilSoapCallResponse } from '../Services/GradesService'

export function * getGradesSaga (userSaga) {
  try{
    yield call(fuListaNotas, userSaga.user)
    yield delay(2000)
    let response = yield call(waitUntilSoapCallResponse)
    yield put(GradesActions.updateGrades(response))
  }
  catch(error){
    console.log("error");
    console.error(error);
    //yield put(ErrorActions.handleError(error))
  }
}
