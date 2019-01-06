import React, { Component } from "react";

export default class Detail extends Component {
  render() {
    const asd = this.props.products.map((product, key) => (
      <p key={key}>
        {product.name}
      </p>
    ))
    return (
      <div>
        {asd}
      </div>
    )
  }
}
