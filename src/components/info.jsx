import React, { Component } from "react";
import "../components/styles.css";

class Info extends Component {
  render() {
    return (
      <div>
        <img  className = 'info container'src={this.props.location.query.url} />
        <div className='text'>{this.props.location.query.info}</div>
      </div>
    );
  }
}
export default Info;
