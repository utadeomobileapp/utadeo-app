import React from 'react';
import { ExpoConfigView } from '@expo/samples';
//// TODO: import View

export default function SettingsScreen() {

  return <ExpoConfigView />;
}

SettingsScreen.navigationOptions = {
  title: 'app.json',
};
