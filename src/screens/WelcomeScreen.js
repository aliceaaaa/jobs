import React, { Component } from "react";
import Slides from "../components/Slides";

const SLIDE_DATA = [
  { text: "Welcome to the App!", color: "#03A9F4" },
  { text: "Set your location, then swipe away", color: "#009688" },
  { text: "DEIN GESICHT IST MIR EGAL BUCK DICH NOCH EINMAL", color: "#03A9F4" }
];

export default class WelcomeScreen extends Component {
  onSlidesComplete = () => {
    this.props.navigation.navigate("auth");
  };

  render() {
    return <Slides data={SLIDE_DATA} onComplete={this.onSlidesComplete} />;
  }
}
