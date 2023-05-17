import { Component } from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      subtitle: "",
      claps: 0,
      publication: "",
      reading_time: ""
    };
  }
  componentDidMount() {
    this.getArticle();
  }
  getArticle() {
    fetch(this.props.link).then((res) => {
      res.json().then((data) => {
        this.setState({
          title: data.title,
          subtitle: data.subtitle,
          claps: data.claps,
          publication: data.publication,
          reading_time: data.reading_time
        })
      }).catch((e) => {
        console.error(e)
      })
    }).catch((e) => {
      console.error(e)
    })
  }
  like() {
    fetch(`${this.props.link}/liked`)
    this.getArticle();
  }
  dislike() {
    fetch(`${this.props.link}/unliked`)
    this.getArticle();
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{this.state.title}</Text>
        <Text style={styles.subtitle}>{this.state.subtitle}</Text>
        <Text style={styles.publication}>{this.state.publication}</Text>
        <View style={styles.info}>
          <Text style={styles.claps}>{this.state.claps} Claps</Text>
          <Text style={styles.reading_time}>{this.state.reading_time} min</Text>
        </View>
        <View style={styles.voting}>
          <TouchableOpacity onPress={() => this.like()} style={styles.like}><Image source={require("../assets/like.svg")} /></TouchableOpacity>
          <TouchableOpacity onPress={() => this.dislike()} style={styles.dislike}><Image source={require("../assets/dislike.svg")} /></TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    marginTop: "20vh",
    color: "#ffffff",
    fontSize: "4vw"
  },
  subtitle: {
    color: "#9c9c9c",
    fontSize: "2vw"
  },
  publication: {
    color: "#f5c842",
    fontSize: "2vw",
    marginBottom: "1rem"
  },
  info: {
    display: "flex",
    flexDirection: "row",
    gap: "1rem"
  },
  claps: {
    color: "#ffffff",
    paddingLeft: "1rem",
    paddingRight: "1rem",
    paddingTop: "0.5rem",
    paddingBottom: "0.5rem",
    backgroundColor: "#4287f5",
    borderRadius: "0.5rem"
  },
  reading_time: {
    color: "#ffffff",
    paddingLeft: "1rem",
    paddingRight: "1rem",
    paddingTop: "0.5rem",
    paddingBottom: "0.5rem",
    backgroundColor: "#d535fc",
    borderRadius: "0.5rem"
  },
  voting: {
    marginTop: "auto",
    display: "flex",
    flexDirection: "row",
    gap: "10vw",
    marginBottom: "10vh",
  },
  like: {
    width: "10vw",
    height: "10vw",
    backgroundColor: "#0eb32c",
    borderRadius: "1rem"
  },
  dislike: {
    width: "10vw",
    height: "10vw",
    backgroundColor: "#b83211",
    borderRadius: "1rem"
  }
})