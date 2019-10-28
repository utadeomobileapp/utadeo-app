import { call, put, delay } from 'redux-saga/effects'
import {DummyTypes} from '../redux/DummyRedux'
import DummyActions from '../redux/DummyRedux'
import { add, divide, multiply, subtract, waitUntilSoapCallResponse } from '../Services/DummyService'

export function * addSaga (numbersSaga) {
  var arrayNumbers = [numbersSaga.numbers.intA, numbersSaga.numbers.intB]
  yield call(add, arrayNumbers)
  yield delay(2000)
  let response = yield call(waitUntilSoapCallResponse)
  yield put(DummyActions.retrieveResult(response))
}

export function * divideSaga (requestArgs) {
//TODO divide saga logic here
}

export function * multiplySaga (requestArgs) {
//TODO multiply saga logic here
}

export function * subtractSaga (requestArgs) {
//TODO subtract saga logic here
}

export function * retrieveResultSaga (response) {
  yield put(DummyActions.retrieveResult(response))
}
