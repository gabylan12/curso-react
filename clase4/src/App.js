import React from 'react';
import axios from 'axios';
import './App.css';

class ExchangeRate extends React.Component {
  
  render() {
    return (<label>El {this.props.baseCurrency} vale {this.props.relativeValue} {this.props.displayCurrency}</label>)
  }
}

class SelectorRate extends React.Component {

  handleChange = e => this.setState({ value: e.target.value });

  changeSearch = (e) => {
    e.preventDefault();
    var type = e.target.value;
    this.props.changeSearchState(this.props.name,type)
  }

  render() {
    return (<select name={this.props.name}
                    value={this.props.value}
                    onChange={this.changeSearch} >
    {
      this.props.currencies.map ( currency => <option value={currency}>{currency}</option>)
    }
    </select>)
  }
}


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      baseCurrency: "",
      displayCurrency: "",
      relativeValue: ""
    }
    this.changeSearchState = this.changeSearchState.bind(this);
  }

  componentDidMount(){
    this.setState({
      baseCurrency: "USD",
      displayCurrency: "USD",
      relativeValue : "1"
      });
  }

  
  changeSearchState = (name,dataType) => {
    
    var baseCurrency = name == "baseCurrency"?dataType:this.state.baseCurrency;
    var displayCurrency = name == "displayCurrency"?dataType:this.state.displayCurrency;
    
    axios.get("https://api.exchangeratesapi.io/latest?base=" + baseCurrency).then(result => {
    this.setState({
      [name]: dataType,
      relativeValue : result.data.rates[displayCurrency]
      });
    })
   
  }

  shouldComponentUpdate(nextProps,nextState) {
    return this.state.baseCurrency != nextState.baseCurrency ||
           this.state.displayCurrency != nextState.displayCurrency;
  }

  render() {
    return (
      <>
      <ExchangeRate baseCurrency={this.state.baseCurrency} relativeValue={this.state.relativeValue} displayCurrency={this.state.displayCurrency} />
      <SelectorRate name="baseCurrency" value={this.state.baseCurrency} changeSearchState={this.changeSearchState} currencies={["EUR","USD","JPY"]} />
      <SelectorRate name="displayCurrency" value={this.state.displayCurrency} changeSearchState={this.changeSearchState} currencies={["EUR","USD","JPY"]} />                    
      </>
    );
  }
}

export default App;
