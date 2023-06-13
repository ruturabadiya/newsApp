import React, { Component } from "react"
import loading from './loading.gif'

export class Spinner extends Component {
  render() {
    return (
      <div className="text-center">
        <img src={loading}  className="my-3" alt="loading" />
      </div>
    )
  }
}

export default Spinner 