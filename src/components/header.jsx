import React, { Component } from "react";
import "../components/styles.css";
import Img from "./img";
import { Link } from "react-router-dom";
class Header extends Component {
  state = {
    im: [
      {
        id: 0,
        val: require("./images/pexels-photo-260689.jpeg"),
        info: "Image1"
      },
      {
        id: 1,
        val: require("./images/pexels-photo-380769.jpeg"),
        info: "Image2"
      },
      { id: 2, val: require("./images/third.jpg"), info: "Image3" },
      { id: 3, val: require("./images/fourth.jpg"), info: "Image4" }
    ],
    urlf: null,
    btn: null,
    wc: "Welcome"
  };
  handle = url => {
    if (url) {
      let i = url;
      this.setState({ urlf: i });
      this.setState({ btn: <button>Information</button> });
      this.setState({ wc: null });
      localStorage.setItem("urlf",i)
    } else {
      this.setState({ wc: "Welcome" });
    }
  };
  handleId = () => {
    if(this.state.urlf==null){
        return -1
    }
    let inf;
    inf = this.state.im.filter(i => this.state.urlf === i.val);
    console.log(inf);
    if (inf[0] === undefined) {
      return -1;
    } else {
      const newTo = {
        inf: inf[0].info,
        ids: inf[0].id,
        u: this.state.urlf
      };
      localStorage.setItem("info",inf[0].info)
      return newTo;
    }
  };
  handleClass = url => {
    let classn;
    if (url != null) {
      classn = "box";
      return classn;
    } else {
      classn = "boxhidden";
      return classn;
    }
  };

  render() {
    let att = this.state.urlf;
    let v = this.handleId();
    let c = this.handleClass(this.state.urlf);
    return (
      <div className="outer">
        <div className="header">
          <span>
            <div className="wc">{this.state.wc}</div>
            <img className={c} src={att} />
          </span>
          <Link
            to={{
              pathname: "/info",
              query: {
                info: v.inf,
                url: v.u
              }
            }}
          >
            <span className="btnn">{this.state.btn}</span>
          </Link>
        </div>
        <div>
          <span>
            {this.state.im.map(i => (
              <Img key={i.id} im={i.val} onLoad={this.handle} />
            ))}
          </span>
        </div>
      </div>
    );
  }
}

export default Header;
