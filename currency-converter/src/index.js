import React, { Component } from 'react';
import { render } from 'react-dom';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
// import getTime from 'date-fns/get_time'
import Typography from '@material-ui/core/Typography';

import Converter from './components/Converter';
import Loading from './components/Loading';
// import RecentlyEntered from './RecentlyEntered';
import Graph from './components/Graph';
import './main.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      currencyList: [],
      currencyFrom: '',
      currencyTo: '',
      currencyFromValue: '',
      currencyToValue: '',
      error:'',
      loadingFullWidth: true,
      loadingButton: false,
      convertedItems: [],
      currencyDetailsForGraph: [],
      baseCurrency:'',
    };
  }

  componentDidMount() {
    fetch('https://txf-ecb.glitch.me/rates')
      .then(function (response) {
        return response.json();
      })
      .then(responseJson => {
        let rates = responseJson.rates;
        const currencyList = [];
        const currencyListForGraph = []
        for(let data in rates){
          let temp = [];
          currencyList.push(rates[data].currency);
          if(!['IDR','KRW'].includes(rates[data].currency)){
            temp.push(rates[data].currency);
            temp.push(parseInt(rates[data].rate));
            currencyListForGraph.push(temp);
          }
        }
        
        const updatedCurrencyList = currencyList.slice(0);
        updatedCurrencyList.unshift(responseJson.base);
        updatedCurrencyList.unshift('');
        this.setState({
          currencyList: updatedCurrencyList,
          loadingFullWidth: false,
          currencyDetailsForGraph: currencyListForGraph,
          baseCurrency: responseJson.base,
        })
      })
      .catch(error=> console.log(error));
    setInterval(() => {
      if(localStorage){
      let convertedList = JSON.parse(localStorage.getItem('convertedItems')) || [];
      this.setState({
        convertedItems: convertedList,
      })
    }},1000)
  }

  handleCurrencySelection = (value, label) => {
    this.setState({
      [label]: value,
      error: '',
      currencyToValue: '',
    })
  }

  handleInputAmountChange = value => 
    this.setState({ 
      currencyFromValue: value,
      error: '', 
      currencyToValue: '',
    });

  handleCurrencyConversion = () => {
    const {
      currencyFrom, 
      currencyTo, 
      currencyFromValue, 
      currencyToValue,
      error,
      convertedItems,
    } = this.state;

    if(!currencyFrom || !currencyTo || !currencyFromValue){
      this.setState({
        error: 'Invalid details',
      })
      return '';
    }
    if(currencyFrom === currencyTo){
      this.setState({
        error: 'Cannot have same currencies',
      })
      return '';
    }

    this.setState({
      loadingButton: true,
    })

    fetch('https://txf-ecb.glitch.me/rates')
      .then(function (response) {
        return response.json();
      })
      .then(data => {
        let count = 0;
        const rates = data.rates;
        rates.push({"currency":data.base, "rate":"1"})
        let toRate = 0, fromRate = 0;
        for(let item in rates){
          if(currencyFrom === rates[item].currency){
            fromRate = rates[item].rate;
            count++;
          }
          else if(currencyTo === rates[item].currency){
            toRate = rates[item].rate;
            count++;
          }
          if(count === 2)
            break;
        }
        const result = Math.ceil(toRate/fromRate * currencyFromValue * 1000) / 1000;
        const convertedItem = {
            "from": currencyFrom,
            "to": currencyTo,
            "amount": currencyFromValue,
            "result": result,
            "time": new Date(),
        }
        const items = convertedItems.slice(0);
        if(items.length>9){
          items.pop();
        }
        items.unshift(convertedItem);
        if(localStorage){
          localStorage.clear();
          localStorage.setItem('convertedItems', JSON.stringify(items));
        }
        this.setState({
          currencyToValue: result,
          loadingButton: false,
          convertedItems: items,
        })
        
      })
      .catch(error => console.log(error));
  }

  showDataFromHistory = (item) => {
    this.handleCurrencySelection(item.from, 'currencyFrom');
    this.handleCurrencySelection(item.to, 'currencyTo');
    this.handleInputAmountChange(item.amount);
  }

  render() {
    const { 
      loadingFullWidth,
      convertedItems,
      currencyDetailsForGraph,
      baseCurrency,
    } = this.state;
    return (
      <div>
        {loadingFullWidth ? <Loading /> 
        : (<div>
            <Grid container>
              <Grid item container xs={12} sm={6}>
                <Grid item xs={12} className="data">
                  <Paper>
                  <Typography variant="headline" className="main">Currency Converter
                  </Typography>
                  <Converter 
                    {...this.state} 
                    handleCurrencySelection={(event,label) => this.handleCurrencySelection(event.target.value, label)}
                    handleInputAmountChange={event => this.handleInputAmountChange(event.target.value)}
                    handleCurrencyConversion={this.handleCurrencyConversion}
                  />
                  </Paper>
                </Grid>
                <Grid item xs={12} className="data">
                  <Paper> 
                    {/* <RecentlyEntered 
                      convertedItems={convertedItems}
                      showDataFromHistory={this.showDataFromHistory}
                    /> */}
                  </Paper>
                </Grid>
              </Grid>

              <Grid container item xs={12} sm={6}>
                <Grid item xs={12} className="data">
                  <Paper> 
                    <Graph 
                      currencyDetailsForGraph={currencyDetailsForGraph}
                      baseCurrency={baseCurrency}
                    />
                  </Paper>
                </Grid>
              </Grid>
            </Grid>
          </div>
        )
      }
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
