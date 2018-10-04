import React, { Component } from "react";
import { View, Text } from "react-native";
import { TabNavigator, StackNavigator } from "react-navigation";

import {
  AuthScreen,
  WelcomeScreen,
  MapScreen,
  DeckScreen,
  ReviewScreen,
  SettingsScreen
} from "./screens";

export default class App extends Component {
  render() {
    const MainNavigator = TabNavigator({
      welcome: { screen: WelcomeScreen },
      auth: { screen: AuthScreen },
      main: {
        screen: TabNavigator({
          map: { screen: MapScreen },
          deck: { screen: DeckScreen },
          review: {
            screen: StackNavigator({
              review: { screen: ReviewScreen },
              settings: { screen: SettingsScreen }
            })
          }
        })
      }
    });

    return <MainNavigator />;
  }
}
