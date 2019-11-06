import { call, put, delay } from 'redux-saga/effects'
import {DummyTypes} from '../redux/DummyRedux'
import DummyActions from '../redux/DummyRedux'
import {ErrorTypes} from '../redux/ErrorRedux'
import ErrorActions from '../redux/ErrorRedux'
import { add, divide, multiply, subtract, waitUntilSoapCallResponse } from '../Services/DummyService'

export function * addSaga (numbersSaga) {
  try{
    var arrayNumbers = [numbersSaga.numbers.intA, numbersSaga.numbers.intB]
    yield call(add, arrayNumbers)
    yield delay(2000)
    let response = yield call(waitUntilSoapCallResponse)
    yield put(DummyActions.retrieveResult(response))
  }
  catch(error){
    yield put(ErrorActions.handleError(error))
  }
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
