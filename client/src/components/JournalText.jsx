import React, { Component } from 'react';
import { connect } from "react-redux";
import {
  getConvoData
} from '../actions/actions.js'
import "../styles/JournalPage.css";

class JournalText extends Component {  
  constructor(props) {
    super(props);
    this.state = {
      convoData: this.props.getConvoData() 
    };
    
  }

  render() {
    return (
      <div className="tab-content text-left" id="nav-tabContent">
        <div className="tab-pane fade show active" id="list-entry1" role="tabpanel" aria-labelledby="list-entry1-list">
          <h1 className="title">{this.props.convoData[0] ? this.props.convoData[0].time_created : ""}</h1>
          <div className="line-break"></div>
          {this.props.convoData[0] ? this.props.convoData[0].flow[1].response : ""}
          <br /><br />
          <h4> How was your day? </h4>
            {this.props.convoData[0] ? this.props.convoData[0].flow[0].response : ""}
          <br /><br />
          <h4> According to our conversation, you generally felt {this.props.convoData[0] ? this.props.convoData[0].analysis.sentiment.label : ""}!</h4>
            
        </div>
        <div className="tab-pane fade" id="list-entry2" role="tabpanel" aria-labelledby="list-entry2-list">
          <h1 className="title">{this.props.convoData[1] ? this.props.convoData[1].time_created : ""}</h1>
          <div className="line-break"></div>
          {this.props.convoData[1] ? this.props.convoData[1].flow[1].response : ""}
        </div>
        <div className="tab-pane fade" id="list-entry3" role="tabpanel" aria-labelledby="list-entry3-list">
          <h1 className="title">{this.props.convoData[2] ? this.props.convoData[2].time_created : ""}</h1>
          <div className="line-break"></div>
          {this.props.convoData[2] ? this.props.convoData[2].flow[1].response : ""}
        </div>
        <div className="tab-pane fade" id="list-entry4" role="tabpanel" aria-labelledby="list-entry4-list">
          <h1 className="title">{this.props.convoData[3] ? this.props.convoData[3].time_created : ""}</h1>
          <div className="line-break"></div>
          {this.props.convoData[3] ? this.props.convoData[3].flow[1].response : ""}
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
)(JournalText);