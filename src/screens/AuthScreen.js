import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Text, AcyncStorage } from "react-native";
import * as actions from "../actions";

const mapStateToProps = ({ auth }) => {
  return { token: auth.token };
};

class AuthScreen extends Component {
  componentDidMount() {
    this.props.facebookLogin();
    // AcyncStorage.removeItem("fb_token");
    this.onAuthComplete(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.onAuthComplete(nextProps);
  }

  onAuthComplete(props) {
    if (!props.token) {
      this.props.navigation.navigate("map");
    }
  }

  render() {
    return (
      <View>
        <Text>Facebook Authorization</Text>
      </View>
    );
  }
}

export default connect(
  mapStateToProps,
  actions
)(AuthScreen);
