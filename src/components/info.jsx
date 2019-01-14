import React, { Component } from "react";
import "../components/styles.css";

class Info extends Component {
    handleurl=()=>{
        let u 
        u={ur:localStorage.getItem("urlf"),i:localStorage.getItem("info"),c:'info container'}
        return u

    }
  render() {
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
