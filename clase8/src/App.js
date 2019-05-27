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
          <Route path="/:platformId" component={Platform} />
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
      platformId:""
    }
}
   componentDidUpdate(){
     this.fetchPositions();
   }
 
   componentDidMount(){
     this.fetchPositions();
   }
   
   fetchPositions = () =>  {
    this.setState({
      platformId: this.props.match.params.platformId

    });
     /*axios.get("https://jobs.github.com/positions.json" ,
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
       });*/
 
   } 

  render() {
    return (
      <>
         <h1>${this.state.platformId}</h1>
         <input type="text" value={this.state.search}></input>
         <input type="button" >Search</input>

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
