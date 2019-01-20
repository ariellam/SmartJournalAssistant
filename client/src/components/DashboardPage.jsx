import React, { Component } from 'react';
import { connect } from "react-redux";
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
      {/* replace h2 with custom header */}
        <h2>Dashboard Page</h2>  
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