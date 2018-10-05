import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Text } from "react-native";
import * as actions from "../actions";

class AuthScreen extends Component {
  componentDidMount() {
    this.props.facebookLogin();
  }
  render() {
    return (
      <View>
        <Text>sdfsfsd</Text>
      </View>
    );
  }
}

export default connect(
  null,
  actions
)(AuthScreen);
