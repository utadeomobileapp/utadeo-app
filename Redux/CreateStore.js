import { createStore, applyMiddleware, compose } from 'redux'
import Config from '../Config/DebugConfig'
import createSagaMiddleware from 'redux-saga'
import updateReducers from '../Services/RehydrationServices'
import ReduxPersist from '../Config/ReduxPersist'
import ScreenTracking from './ScreenTrackingMiddleware'
import Reactotron from '../Config/ReactotronConfig'

// creates the store
export default (rootReducer, rootSaga) => {
  /* ------------- Redux Configuration ------------- */

  const middleware = []

  /* ------------- Analytics Middleware ------------- */
  middleware.push(ScreenTracking)

  /* ------------- Saga Middleware ------------- */

  const sagaMonitor = Config.useReactotron ? console.tron.createSagaMonitor() : null
  const sagaMiddleware = createSagaMiddleware({ sagaMonitor })
  middleware.push(sagaMiddleware)

  /* ------------- Assemble Middleware ------------- */

  // if Reactotron is enabled (default for __DEV__), we'll create the store through Reactotron
  let createAppropriateStore
  if(Config.useReactotron){
    createAppropriateStore =
    createStore(rootReducer,
      compose(applyMiddleware(...middleware),
      Reactotron.createEnhancer()))
  }
  else{
    createAppropriateStore =
    createStore(rootReducer,
      compose(applyMiddleware(...middleware)))
  }

    const store = createAppropriateStore

  // configure persistStore and check reducer version number
  let persistor = updateReducers(store)


  // kick off root saga
  sagaMiddleware.run(rootSaga)

  
  return { store, persistor }
}
