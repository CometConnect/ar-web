import { Component } from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";

export default class Recommendation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }
  componentDidMount() {
    fetch(`${this.props.link}/recommandation`).then((val) => {
      val.json().then((res) => {
        const info = []
        for (const item of res) {
          const itemData = JSON.parse(item);
          info.push({
            title: itemData.title,
            subtitle: itemData.subtitle,
            claps: itemData.claps,
            publication: itemData.publication,
            reading_time: itemData.reading_time
          })
        }
        this.setState({
          data: info
        })
      }).catch((e) => {
        console.error(e)
      })
    }).catch((e) => {
      console.error(e)
    })
  }
  cell(item) {
    return (
      <View style={styles.item}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.subtitle}>{item.subtitle}</Text>
        <Text style={styles.publication}>{item.publication}</Text>
        <View style={styles.info}>
          <Text style={styles.claps}>{item.claps} Claps</Text>
          <Text style={styles.reading_time}>{item.reading_time} min</Text>
        </View>
      </View>
    )
  }
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.data}
          renderItem={({ item }) => this.cell(item)}
          keyExtractor={(_, i) => i}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {},
  item: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    marginTop: "20vh",
    color: "#ffffff",
    fontSize: "3vw"
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
})