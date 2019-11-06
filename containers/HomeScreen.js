import * as WebBrowser from 'expo-web-browser';
import React, { Component } from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  AppState
} from 'react-native';

import { MonoText } from '../components/StyledText';
import { Button, Input, Icon   } from 'react-native-elements';
import { connect } from 'react-redux'
import DummyActions from '../redux/DummyRedux'

import {
  merge,
  groupWith,
  contains,
  assoc,
  map,
  sum,
  findIndex
} from 'ramda'

export class HomeScreen extends Component{
  constructor (props) {
    super(props)

    const { currentNumber } = props
    const appState = AppState.currentState
    var numbers = {intA:0 , intB:0, currentNumber:0}
    this.state = {currentNumber, numbers, appState}
  }

  changeInputInts = (intA, intB) => {
    var  numbers = {intA:intA, intB:intB}
    this.setState({
      numbers: numbers
    });
  }

  addNumbers = (intA , intB) => {
    this.changeInputInts(intA, intB)
    this.props.add(this.state.numbers)
  }

  divideNumbers = (intA , intB) => {
    this.changeInputInts(intA, intB)
    this.props.divide(this.state.numbers)
  }

  multiplyNumbers = (intA , intB) => {
    this.changeInputInts(intA, intB)
    this.props.multiply(this.state.numbers)
  }

  subtractNumbers = (intA , intB) => {
    this.changeInputInts(intA, intB)
    this.props.subtract(this.state.numbers)
  }


  render () {
  return (

    <View style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}>
        <View style={styles.welcomeContainer}>
          <Image
            source={
              __DEV__
                ? require('../assets/images/Logo-UTADEO-horizontal.png')
                : require('../assets/images/Logo-UTADEO-horizontal.png')
            }
            style={styles.welcomeImage}
          />
        </View>

        <View style={styles.getStartedContainer}>
          <DevelopmentModeNotice />

          <Text style={styles.getStartedText}> Some text</Text>

          <View
            style={[styles.codeHighlightContainer, styles.homeScreenFilename]}>
            <MonoText>Some style</MonoText>
          </View>

          <Text style={styles.getStartedText}>
          UTADEO Login  Current number {this.props.currentNumber}
          </Text>
        </View>

        <Input
          placeholder='Tadeo Mail'
          leftIcon={{ type: 'font-awesome', name: 'envelope' }}
          />
        <Input
            placeholder='Password'
            leftIcon={{ type: 'font-awesome', name: 'lock' }}
          />
        <Button
          title="Login"
        />
        <Input
        onChangeText={(intA) => this.changeInputInts(intA, this.state.numbers.intB)}
        keyboardType='numeric'
          placeholder='int a'
          leftIcon={{ type: 'font-awesome', name: 'subscript' }}
          />
        <Input
        onChangeText={(intB) => this.changeInputInts(this.state.numbers.intA, intB)}
        keyboardType='numeric'
            placeholder='int b'
            leftIcon={{ type: 'font-awesome', name: 'subscript' }}
          />
          <View style={styles.buttonCalculatorContainer}>
        <Button
         onPress={() =>  this.addNumbers(this.state.numbers.intA , this.state.numbers.intB)}
         title="add"
        />
        <Button
         onPress={() =>  this.divideNumbers(this.props , this.state.numbers.intB)}
         title="divide"
        />
        <Button
         onPress={() =>  this.multiplyNumbers(this.state.numbers.intA , this.state.numbers.intB)}
         title="multiply"
        />
        <Button
         onPress={() =>  this.subtractNumbers(this.state.numbers.intA , this.state.numbers.intB)}
         title="subtract"
        />
        </View>

        <View style={styles.helpContainer}>
          <TouchableOpacity onPress={handleHelpPress} style={styles.helpLink}>
            <Text style={styles.helpLinkText}>
              Another style
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <View style={styles.tabBarInfoContainer}>
        <Text style={styles.tabBarInfoText}>
          This is a tab bar.
        </Text>

        <View
          style={[styles.codeHighlightContainer, styles.navigationFilename]}>
          <MonoText style={styles.codeHighlightText}>
            from navigation/MainTabNavigator.js
          </MonoText>
        </View>
      </View>
    </View>
  );
  }
}

HomeScreen.navigationOptions = {
  header: null,
};


function DevelopmentModeNotice() {
  if (__DEV__) {
    const learnMoreButton = (
      <Text onPress={handleLearnMorePress} style={styles.helpLinkText}>
        Learn more
      </Text>
    );

    return (
      <Text style={styles.developmentModeText}>
        Development mode is enabled: your app will be slower but you can use
        useful development tools. {learnMoreButton}
      </Text>
    );
  } else {
    return (
      <Text style={styles.developmentModeText}>
        You are not in development mode: your app will run at full speed.
      </Text>
    );
  }
}

function handleLearnMorePress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/workflow/development-mode/'
  );
}

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/workflow/up-and-running/#cant-see-your-changes'
  );
}
const mapStateToProps = (state) => {
  return {
    currentNumber: state.dummy.currentNumber
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    add: (numbers) => dispatch(DummyActions.add(numbers)),
    multiply: (numbers) => dispatch(DummyActions.multiply(numbers)),
    divide: (numbers) => dispatch(DummyActions.divide(numbers)),
    subtract: (numbers) => dispatch(DummyActions.subtract(numbers))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)


//TODO all styles should be used with SASS this has to change

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
  buttonCalculatorContainer: {
    alignItems: 'stretch',
    marginHorizontal: 50,
  },
});
