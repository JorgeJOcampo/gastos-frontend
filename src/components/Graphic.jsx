import React, { Component } from 'react'
import AnyChart from 'anychart-react'
import anychart from 'anychart'
export default class Graphic extends Component {
  render() {
    const complexSettings = {
      width: 400,
      height: 300,
      id: this.props.container,
      type: 'pie',
      data: [
        ["Chocolate", 5],
        ["Rhubarb compote", 2],
        ["Crêpes Suzette", 2],
        ["American blueberry", 2],
        ["Buttermilk", 1]
      ],
      title: 'Top 5 pancake fillings'
    };
    return (
      <div>
        <AnyChart
          {...complexSettings}
        />
      </div>
    )
  }
}
