import React, { Component } from "react";
import "../components/styles.css";

class Info extends Component {
    handleurl=()=>{
        let u 
        if(this.props.location.query==undefined){
            console.log("hello")
            u = {ur:'',i:'',c:'boxhidden'}
            return u
        }
        else{
            u={ur:this.props.location.query.url,i:this.props.location.query.info,c:'info container'}
            // let u = this.props.location.query.url
            return u
        }
    }
  render() {
    //   console.log(this.props.location.query)
      let ans = this.handleurl()
      console.log(ans);
      
    return (
      <div>
        <img  className ={ans.c} src={ans.ur} />
        <div className='text'>{ans.i}</div>
      </div>
    );
  }
}
export default Info;
