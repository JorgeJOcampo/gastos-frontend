import React, { Component } from 'react'
import './Summary.css'

export default class Summary extends Component {
  render() {
    return (
      <div className="container summary">
        <div className="row">
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
      </div>
    )
  }
}
