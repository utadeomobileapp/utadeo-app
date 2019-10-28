import Config from '../Config/DebugConfig'
import Immutable from 'seamless-immutable'
import Reactotron from 'reactotron-react-native'
import { reactotronRedux } from 'reactotron-redux'
import sagaPlugin from 'reactotron-redux-saga'

  // https://github.com/infinitered/reactotron for more options!
const reactotron = Reactotron
  .configure({ name: 'UTadeo app' })
  .useReactNative()
  .use(reactotronRedux())
  // register the redux-saga plugin so we can use the monitor in CreateStore.js
  .use(sagaPlugin())

if (Config.useReactotron) {
  // let's connect!
  reactotron.connect()

  // Let's clear Reactotron on every time we load the app
  reactotron.clear()

  // Totally hacky, but this allows you to not both importing reactotron-react-native
  // on every file.  This is just DEV mode, so no big deal.
}
export default reactotron
console.tron = reactotron
