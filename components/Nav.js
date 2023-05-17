import { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.nav}>
        <TouchableOpacity onPress={() => this.props.switchToHome()} style={styles.button}><View><Text style={styles.txt}>Home</Text></View></TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.switchToPopular()} style={styles.button}><View><Text style={styles.txt}>Popular</Text></View></TouchableOpacity >
        <TouchableOpacity onPress={() => this.props.switchToRecommendation()} style={styles.button}><View><Text style={styles.txt}>Recommended</Text></View></TouchableOpacity >
      </View >
    );
  }
}

const styles = StyleSheet.create({
  nav: {
    marginTop: "1vh",
    height: "10vh",
    backgroundColor: "#151515",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center"
  },
  button: {
    paddingTop: "0.25rem",
    paddingBottom: "0.25rem",
    paddingLeft: "0.5rem",
    paddingRight: "0.5rem"
  },
  txt: {
    color: "#ffffff",
    fontSize: "1.5vw"
  }
})