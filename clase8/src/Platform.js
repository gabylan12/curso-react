import React from 'react';
import {  Route } from "react-router-dom";
import { connect } from 'react-redux';
import {updatePlatform as updatePlatformActionCreator}  from './actions'


const Platform = ({ match }) =>

  <div>
    <Route path={`${match.url}/:platformId`} component={PlatformClass} />
  </div>;

class PlatformClass extends React.Component {
  /*constructor(props) {
    super(props);
    this.state = {
      components: []
    }
  }

  searchResults() {
    console.log(this.state.platformId);
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
        })
      .catch(function (error) {
        console.log(error);
      });
  }
*/
  render() {
    return (
      <>
        <input type="text" value={this.props.searchText}
          onChange={event => this.setState({ search: event.target.value })}></input>
        <button onClick={this.props.updatePlatform} >Search</button>
        {this.props.components.map(component =>

          <h6 key={`${component.name}`}>{component.name}</h6>
        )}
      </>)
  }
}





export default connect(
  state => ({
    searchText: state.searchType.searchText,
    platformdId: state.searchType.platformdId,
    components: state.searchType.components
  }),
  dispatch => ({
    updatePlatform: () => dispatch(updatePlatformActionCreator()),
  })
)(PlatformClass);

