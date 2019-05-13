import React from 'react';
import './App.css';
import axios from 'axios';
import { BrowserRouter , Route, Link } from "react-router-dom";

const Home = () =>
  <div>
    <h2>Home</h2>
  </div>;

const Topics = ({ match }) =>
   
  <div>
    <h2>Topics </h2>
    <Route path={`${match.url}/:topicId`} component={TopicClass} />
    <Route
      exact path={match.url}
      render={() => <h3>Please select a topic.</h3>}
    />
  </div>;

class TopicClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: "default",
      offers: []
    }
  }
  componentDidUpdate(){
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

  }

  render() {
    return (
      <>
      <h1>{this.state.location}</h1>
      {this.state.offers.map ( offer => <h2>{offer.company}</h2>)}
      </>)
  }
}

/*const Topic = ({ match }) =>
  <TopicClass topicId={match.params.topicId} />;*/

const BasicExample = () =>
  <BrowserRouter>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/topics/sf">San Francisco</Link></li>
        <li><Link to="/topics/ny">New York</Link></li>
        <li><Link to="/topics">Remotos</Link></li>
      </ul>
      <hr />
      <Route exact path="/" component={Home} />
      <Route path="/topics" component={Topics} />
    </div>
  </BrowserRouter>;

function App() {
  return (
    <BasicExample />
  );
}

export default App;
