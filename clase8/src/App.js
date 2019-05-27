import React from 'react';
import axios from 'axios';
import './App.css';
import { BrowserRouter, Route, Link } from "react-router-dom";


class Platforms extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      platforms: []
    }
  }
  componentDidUpdate() {
    this.fetchPositions();
  }

  componentDidMount() {
    this.fetchPositions();
  }

  fetchPositions = () => {
    axios.get("https://libraries.io/api/platforms")
      .then(result => {
        this.setState({
          platforms: result.data
        });
      })
      .catch(function (error) {
        console.log(error);
      });

  }

  render() {
    return (
      <>
        <BrowserRouter>

          {this.state.platforms.map(platform =>

            <Link to={`/platforms/${platform.name}`} key={`${platform.name}`}>{platform.name}</Link>
          )}
          <Route path="/platforms" component={Platform} />
        </BrowserRouter>

      </>)
  }
}

const Platform = ({ match }) =>

  <div>
    <h1>{match.url}</h1>
    <Route path={`${match.url}/:platformId`} component={PlatformClass} />

  </div>;


class PlatformClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      platformId: "",
      components: []
    }
  }
  componentDidUpdate() {
    this.fetchPositions();
  }

  componentDidMount() {
    this.fetchPositions();
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.platformId !== nextProps.match.params.platformId ||
           this.state.components !== nextState.components;
  }

  fetchPositions = () => {
    
    this.setState({
      platformId: this.props.match.params.platformId,
      

    });
  }

  searchResults() {
    console.log("ok");
    console.log(this.state.components)
    axios.get("https://libraries.io/api/search",
      {
        params: {
          q: this.state.search,
          platform: this.state.platformId
        }
      })
      .then(
        
        result => {
          this.setState({
            components: result.data
          });
          console.log("finish")
        })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <>
        <input type="text"
          onChange={event => this.setState({ search: event.target.value })}></input>
        <button onClick={event => this.searchResults()} >Search</button>
        {this.state.components.map(component =>

          <h6 key={`${component.name}`}>{component.name}</h6>
        )}
      </>)
  }
}





function App() {
  return (
    <div className="App">
      <Platforms />
    </div>
  );
}

export default App;
