import React, { Component } from 'react';
import Image from './Image'
import { connect } from "react-redux";
import dash from '../images/logo.png'
import '../styles/Dashboard.css';
import {
  getConvoData
} from '../actions/actions.js'

class DashboardPage extends Component {  
  constructor(props) {
    super(props);
    this.state = {
      convoData: this.props.getConvoData() 
    };   
  }

  displayKeywords = () => {
    console.log("displaying keywords");
    var keywords = "";
    if (this.props.convoData[0]) {
      {this.props.convoData[0].keywords.map((keyword) => (
        keywords = keywords + ", " + keyword.text
      ))}
      return keywords;
    }
    return "no keywords found";
  }
  
  render() {
    console.log(this.props.convoData);
    return (
      <div className="DashboardPage">
         <div className="Navbar">
          {/* <Image src={ dash }></Image> */}
         </div>
        <div className="content">
        <div className="date">
          January 20th 2019
        </div>
        <div>
          <div>10</div>minutes spoken
        </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-9">
              <div className="row">
                10 minutes spoken
              </div>
              <div className="row">
                Topics: {this.displayKeywords()}
              </div>
              <div className="row">
                Overall emotion: {"happy"}
              </div>
              <div className="row">
                Replace with chart of sentiment over time
              </div>
            </div>
            <div className="col-md-3">
              Replace with image
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    convoData: state.convoData
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getConvoData: () => dispatch(getConvoData())
  };
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(DashboardPage);