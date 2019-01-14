import React, { Component } from "react";
import "../components/styles.css";

class Img extends Component {
  render() {
    return (
      <img
        src={this.props.im}
        className="rsize"
        onClick={() => this.props.onLoad(this.props.im)}
      />
    );
  }
}

export default Img;
