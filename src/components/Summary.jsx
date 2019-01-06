import React, { Component } from 'react'
import './Summary.css'
import PieGraphic from './PieGraphic'
import Detail from './Detail';


export default class Summary extends Component {
  render() {
    const products = [
      {
        "name": "shampoo",
        "value": 150,
        "type": "casa"
      },
      {
        "name": "jabon",
        "value": 25,
        "type": "casa"
      },
      {
        "name": "usb",
        "value": 300,
        "type": "entretenimiento"
      }
    ]
    return (
      <div className="container summary">
        <div className="row summary">
          <div className="col-6">
            Ingreso
          </div>
          <div className="col-6 text-right">
            100
          </div>
        </div> 
        <div className="row">
          <div className="col-6">
            Remanente
          </div>
          <div className="col-6 text-right">
            200
          </div>
        </div> 
        <div className="row">
          <div className="col-6">
            Gasto
          </div>
          <div className="col-6 text-right">
            50
          </div>
        </div>
        <div className="row balance">
          <div className="col-6">
            SALDO
          </div>
          <div className="col-6 text-right">
            250  
          </div>
        </div>
        <div className="row">
          <div className="col-8">
            <PieGraphic data={products}/>
          </div>
          <div className="col-4">
            <Detail products={products}/>
          </div>
          
        </div>
  
      </div>
    )
  }
}
