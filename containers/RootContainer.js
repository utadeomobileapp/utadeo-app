import React, { Component } from 'react'
import { View, StatusBar } from 'react-native'
import ReduxNavigation from '../navigation/ReduxNavigation'
import { connect } from 'react-redux'
import StartupActions from '../redux/StartupRedux'
import ReduxPersist from '../Config/ReduxPersist'
import styles from './styles/RootContainerStyles'

export class RootContainer extends Component {
  componentDidMount () {
    // if redux persist is not active fire startup action
    if (!ReduxPersist.active) {
      this.props.startup()
    }
  }

  render () {
    const {
      // add notifications if necessary
    } = this.props

    return (
      <View style={styles.applicationView}>
        <StatusBar barStyle='light-content' />
        <ReduxNavigation />
      </View>
    )
  }
}

// wraps dispatch to create nicer functions to call within our component
const mapDispatchToProps = (dispatch) => ({
  startup: () => dispatch(StartupActions.startup())
})

export default connect(mapDispatchToProps)(RootContainer)
