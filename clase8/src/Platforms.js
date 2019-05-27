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

            <Link to={`/${platform.name}`} key={`${platform.name}`}>{platform.name}</Link>
          )}
          <Route path="/" component={Platform} />
        </BrowserRouter>

      </>)
  }
}

const Platform = ({ match }) =>

  <div>
    <h2>Topics </h2>
    <h1>${match.url}</h1>
    <Route path={`${match.url}/:platformId`} component={TopicClass} />

  </div>;


class TopicClass extends React.Component {

  /* componentDidUpdate(){
     this.fetchPositions();
   }
 
   componentDidMount(){
     this.fetchPositions();
   }
   
   fetchPositions = () =>  {
     axios.get("https://jobs.github.com/positions.json" ,
     {params: {
       description: "python",
       full_time: "true",
       location: this.props.match.params.topicId
     }})
       .then(result => {
         this.setState({
           location: this.props.match.params.topicId,
           offers: result.data
 
         });
       })
       .catch(function (error) {
         console.log(error);
       });
 
   }*/

  render() {
    return (
      <>
        <h1>Nada</h1>
        <h1>${this.props.match.params.platformId}</h1>

      </>)
  }
}
