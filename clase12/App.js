import React, { Component } from 'react';
import {
  Alert,
  TextInput,
  Button,
  Text,
  View,
  Image,
  StyleSheet,
  ActivityIndicator,
  FlatList,
  Dimensions,
} from 'react-native';
import { NativeRouter, Route, Link, Switch } from 'react-router-native';
import axios from 'axios';

const { width, height } = Dimensions.get('window');

class Platforms extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true, data: '' };
  }

  componentDidMount() {
    axios.get('https://libraries.io/api/platforms').then(res => {
      this.setState({
        isLoading: false,
        data: res.data,
      });
    });
  }

  renderItem(item) {
    const { id, name, color } = item.item;
    return (
      <View style={styles.itemView}>
        <View style={styles.itemInfo}>
          <Link to={`/${name}`} underlayColor="#f0f4f7" style={styles.navItem}>
            <Text style={{ color: item.item.color, fontSize: 60 }}>{name}</Text>
          </Link>
        </View>
      </View>
    );
  }

  render() {
    return (
      <FlatList
        data={this.state.data}
        renderItem={this.renderItem.bind(this)}
        keyExtractor={item => item.id}
      />
    );
  }
}

const Home = () => <Platforms />;

class Project extends Component {
  constructor(props) {
    super(props);
    (this.state = { isLoading: true, query:'java', data: [] }),
     (this.search = this.search.bind(this));
  }

  shouldComponentUpdate(nextProps, nextState) {
    return  nextState.query !== this.state.query ||
            nextState.data !== this.state.data;
  }

  search() {
    axios
      .get('https://libraries.io/api/search?platforms='+this.props.platform+'&q=' + this.state.query)
      .then(res => {
        this.setState({
          data: res.data
        });
      });
  }

  render() {
    return (
      <>
        <Text>Busqueda {this.props.platform}</Text>
        <TextInput
          value={this.state.query}
          onChangeText={(text) => this.setState({query:text})}
          color="#841000"
          style={{
            height: 40,
            width: 100,
            borderColor: 'gray',
            borderWidth: 1,
          }}
        />
        <Button title="Search" color="#841584" onPress={this.search} />
        
        {this.state.data.map(dat => (
          <Text key={dat.name}>{dat.name}</Text>
        ))}
      </>
    );
  }
}

const About = ({ match }) => <Project platform={match.params.platform} />;

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <NativeRouter>
          <Switch>
            <Route path="/:platform" component={About} />
            <Route exact path="/" component={Home} />
          </Switch>
        </NativeRouter>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  itemView: {
    flex: 1,
    width,
    borderBottomWidth: 0.5,
    borderColor: '#cdcdcd',
    borderStyle: 'solid',
    paddingHorizontal: 12,
    flexDirection: 'row',
  },

  itemInfo: {
    flex: 1,
    marginHorizontal: 10,
  },
  name: {
    fontFamily: 'Verdana',
    fontSize: 60,

    textAlign: 'left',
  },
});
