import React, { Component } from "react";
import "../components/styles.css";

class Info extends Component {
    handleurl=()=>{
        let u 
        u={ur:this.props.location.query.url,i:this.props.location.query.info,c:'info container'}
        return u

    }
  render() {
    console.log(this.props.location)
      let ans = this.handleurl()
      
    return (
      <div>
        <img  className ={ans.c} src={ans.ur} />
        <div className='text'>{ans.i}</div>
      </div>
    );
  }
}
export default Info;
