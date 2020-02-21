import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
// import Chart from "react-google-charts";

function Graph({currencyDetailsForGraph, baseCurrency}) {
  currencyDetailsForGraph.unshift(['Currency','Rate']);
  return (
    <Grid container className="grid-items-graph">
    <Typography variant="headline" className="title">Conversion Rates</Typography>
      <Grid item xs={12}>
         {/* <Chart
            className="chart"
            width={'500px'}
            height={'600px'}
            chartType="BarChart"
            loader={<div>Loading Chart ...</div>}
            data={currencyDetailsForGraph}
            options={{
              title: `As per ${baseCurrency}, 2018`,
              hAxis: {
                title: 'rates',
                minValue: 0,
              },
              vAxis: {
                title: 'Currency',
              },
            }}
          /> */}
      </Grid>
    </Grid>
  )
}

export default Graph;