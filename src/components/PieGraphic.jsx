import React, { Component } from 'react'
import {PieChart, Pie, Cell, ResponsiveContainer} from 'recharts';


export default class PieGraphic extends Component {
  render() {
    const colors = ['red', 'green', 'yellow'];
    const data = [...new Set(this.props.data.map(({type}) => type))].map(type =>(
      {
        name: type, 
        value: this.props.data
          .filter(product => product.type === type)
          .map(({value}) => value)
          .reduce((a,b) => a + b)
      }
    ));
    return (
      <ResponsiveContainer>
        <PieChart>
          <Pie data={data} fill="#82ca9d" nameKey="type" dataKey="value" legendType="none" label>
            {
              data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index]}/>
              ))
            }
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    )
  }
}
