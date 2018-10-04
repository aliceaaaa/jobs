import React, { Component } from "react";
import { View, Text } from "react-native";
import { createBottomTabNavigator } from "react-navigation";

import { AuthScreen, WelcomeScreen } from "./screens";

export default class App extends Component {
  render() {
    const MainNavigator = createBottomTabNavigator({
      welcome: { screen: WelcomeScreen },
      auth: { screen: AuthScreen }
    });

    return (
      <View>
        <WelcomeScreen />
      </View>
    );
  }
}
