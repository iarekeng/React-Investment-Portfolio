import React from 'react'
import { Doughnut } from 'react-chartjs-2'
import Grid from './Grid';
import { useState } from 'react';






class BarChart extends React.Component {
  constructor() {
    super();

    this.state = {
      barChartData: [],
      color: 'transparent'
    }
    this.risk1 = this.risk1.bind(this);
    this.risk2 = this.risk2.bind(this);
    this.risk3 = this.risk3.bind(this);
    this.risk4 = this.risk4.bind(this);
    this.risk5 = this.risk5.bind(this);
    this.risk6 = this.risk6.bind(this);
    this.risk7 = this.risk7.bind(this);
    this.risk8 = this.risk8.bind(this);
    this.risk9 = this.risk9.bind(this);
    this.risk10 = this.risk10.bind(this);
    
  }
    
  componentDidMount() {
    this.setState({
      barChartData:{
        labels: ['Bonds %', 'Large Cap %', 'Mid Cap %', 'Foreign %', 'Small Cap %'],
        datasets: [
          {
            label: 'Default',
            backgroundColor: ['red','blue','green','purple','yellow'],
            data: [100,0,0,0,0]
          }
        ]
      }
    })
  }

  risk1() {
    this.setState({
      barChartData:{
        labels: ['Bonds %', 'Large Cap %', 'Mid Cap %', 'Foreign %', 'Small Cap %'],
        datasets: [
          {
            label: 'Risk #1',
            backgroundColor: ['red','blue','green','purple','yellow'],
            data: [80,20,0,0,0]
          }
        ]
      }
    })
  }
  risk2() {
    this.setState({
      barChartData:{
        labels: ['Bonds %', 'Large Cap %', 'Mid Cap %', 'Foreign %', 'Small Cap %'],
        datasets: [
          {
            label: 'Risk #2',
            backgroundColor: ['red','blue','green','purple','yellow'],
            data: [70,15,15,0,0]
          }
        ]
      }
    })
  }
  risk3() {
    this.setState({
      barChartData:{
        labels: ['Bonds %', 'Large Cap %', 'Mid Cap %', 'Foreign %', 'Small Cap %'],
        datasets: [
          {
            label: 'Risk #3',
            backgroundColor: ['red','blue','green','purple','yellow'],
            data: [60,15,15,10,0]
          }
        ]
      }
    })
  }
  risk4() {
    this.setState({
      barChartData:{
        labels: ['Bonds %', 'Large Cap %', 'Mid Cap %', 'Foreign %', 'Small Cap %'],
        datasets: [
          {
            label: 'Risk #4',
            backgroundColor: ['red','blue','green','purple','yellow'],
            data: [50,20,20,20,0]
          }
        ]
      }
    })
  }
  risk5() {
    this.setState({
      barChartData:{
        labels: ['Bonds %', 'Large Cap %', 'Mid Cap %', 'Foreign %', 'Small Cap %'],
        datasets: [
          {
            label: 'Risk #5',
            backgroundColor: ['red','blue','green','purple','yellow'],
            data: [40,20,20,10,0]
          }
        ]
      }
    })
  }
  risk6() {
    this.setState({
      barChartData:{
        labels: ['Bonds %', 'Large Cap %', 'Mid Cap %', 'Foreign %', 'Small Cap %'],
        datasets: [
          {
            label: 'Risk #6',
            backgroundColor: ['red','blue','green','purple','yellow'],
            data: [35,25,5,30,5]
          }
        ]
      }
    })
  }
  risk7() {
    this.setState({
      barChartData:{
        labels: ['Bonds %', 'Large Cap %', 'Mid Cap %', 'Foreign %', 'Small Cap %'],
        datasets: [
          {
            label: 'Risk #7',
            backgroundColor: ['red','blue','green','purple','yellow'],
            data: [20,25,25,25,5]
          }
        ]
      }
    })
  }
  risk8() {
    this.setState({
      barChartData:{
        labels: ['Bonds %', 'Large Cap %', 'Mid Cap %', 'Foreign %', 'Small Cap %'],
        datasets: [
          {
            label: 'Risk #8',
            backgroundColor: ['red','blue','green','purple','yellow'],
            data: [10,20,40,20,10]
          }
        ]
      }
    })
  }
  risk9() {
    this.setState({
      barChartData:{
        labels: ['Bonds %', 'Large Cap %', 'Mid Cap %', 'Foreign %', 'Small Cap %'],
        datasets: [
          {
            label: 'Risk #9',
            backgroundColor: ['red','blue','green','purple','yellow'],
            data: [5,15,40,25,15]
          }
        ]
      }
    })
  }
  risk10() {
    this.setState({
      barChartData:{
        labels: ['Bonds %', 'Large Cap %', 'Mid Cap %', 'Foreign %', 'Small Cap %'],
        datasets: [
          {
            label: 'Risk #10',
            backgroundColor: ['red','blue','green','purple','yellow'],
            data: [0,5,25,30,40]
          }
        ]
      }
    })
  }

 

  render() {
  return (
    <div class="header-container">
    <h1>Select your risk level</h1>
    <button class="risk-button" onClick={this.risk1}>1</button>
    <button class="risk-button" onClick={this.risk2}>2</button>
    <button class="risk-button" onClick={this.risk3}>3</button>
    <button class="risk-button" onClick={this.risk4}>4</button>
    <button class="risk-button" onClick={this.risk5}>5</button>
    <button class="risk-button" onClick={this.risk6}>6</button>
    <button class="risk-button" onClick={this.risk7}>7</button>
    <button class="risk-button" onClick={this.risk8}>8</button>
    <button class="risk-button" onClick={this.risk9}>9</button>
    <button class="risk-button" onClick={this.risk10}>10</button>
    <Grid />
    <Doughnut data={this.state.barChartData} width={1400} height={600} options={{responsive: false,}} />  
    </div>
   )
 }
}
export default BarChart