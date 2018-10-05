import React, { Component } from "react";
import { View } from "react-native";
import MapView from "react-native-maps";

export default class MapScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <MapView style={{ flex: 1 }} />
      </View>
    );
  }
}
