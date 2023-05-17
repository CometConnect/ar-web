import { Component } from "react";
import { View, StyleSheet } from "react-native";

import Home from "./screens/Home";
import Popular from "./screens/Popular";
import Recommendation from "./screens/Recommendation";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      screen: Home,
      link: "http://localhost:5000"
    };
  }
  switchToHome() {
    this.setState({
      screen: Home
    });
  }
  switchToPopular() {
    this.setState({
      screen: Popular
    });
  }
  switchToRecommendation() {
    this.setState({
      screen: Recommendation
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <this.state.screen {...this.state} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    textAlign: "center",
    backgroundColor: "#262626",
  }
})