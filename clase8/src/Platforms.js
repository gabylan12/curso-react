import React from 'react';
import axios from 'axios';
import Platform from './Platform.js'
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

export default Platforms;
