import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';

import Loading from './Loading';
import Currencies from './Currency';

function Converter({
    currencyList, 
    currencyFrom, 
    currencyTo, 
    currencyFromValue, 
    currencyToValue, 
    error, 
    loadingButton,
    handleCurrencySelection,
    handleInputAmountChange,
    handleCurrencyConversion
  }){
  return (
  <Grid container className="grid-items-converter">
    <Grid item xs={5}>
      <FormControl required className="select-items">
        <InputLabel>From</InputLabel>
        <Currencies
          currencyList={currencyList}
          handleCurrencySelection={event => handleCurrencySelection(event,'currencyFrom')}
          value={currencyFrom}
        />
      </FormControl>
    </Grid>
    <Grid item xs={1}/>
    <Grid item xs={5}>
      <FormControl required className="select-items">
        <InputLabel>To</InputLabel>
        <Currencies
          currencyList={currencyList}
          handleCurrencySelection={event => handleCurrencySelection(event,'currencyTo')}
          value={currencyTo}
        />
      </FormControl>
    </Grid>
    <Grid item xs={12}>
      <Grid item xs={11}>
        <TextField
          className="text-field"
          label="Amount to be Converted"
          onChange={handleInputAmountChange}
          value={currencyFromValue}
          type="number"
          required
        />
      </Grid>
    </Grid>
    <Grid item xs={11} className="grid-button">
      {loadingButton 
        ? <div>Converting...</div>
        : !error && !currencyToValue ? <Button 
            variant="contained" 
            className='button'
            fullWidth={true}
            onClick={()=>handleCurrencyConversion()}
          >
            Convert
          </Button>
          : <p className={error ? 'error' : 'result'}>{error || `${currencyToValue} in ${currencyTo}`}</p>
      }
    </Grid>
     
  </Grid>
  )
}

export default Converter;