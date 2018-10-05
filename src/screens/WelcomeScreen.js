import React, { Component } from "react";
import { AcyncStorage } from "react-native";
import _ from "lodash";
import Slides from "../components/Slides";
import { Spinner } from "../components/Spinner";

const SLIDE_DATA = [
  { text: "Welcome to the App!", color: "#03A9F4" },
  { text: "Set your location, then swipe away", color: "#009688" },
  { text: "DEIN GESICHT IST MIR EGAL BUCK DICH NOCH EINMAL", color: "#03A9F4" }
];

export default class WelcomeScreen extends Component {
  state = { token: true };

  async componentWillMount() {
    let token = await AcyncStorage.getItem("fb_token");
    if (token === true) {
      this.props.navigation.navigate("map");
      this.setState({ token: true });
    } else {
      this.setState({ token: null });
    }
  }
  onSlidesComplete = () => {
    this.props.navigation.navigate("auth");
  };

  render() {
    if (_.isNull(this.state.token)) {
      return <Spinner />;
    }
    return <Slides data={SLIDE_DATA} onComplete={this.onSlidesComplete} />;
  }
}
