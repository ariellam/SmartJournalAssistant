import React, { Component } from 'react';
import { connect } from "react-redux";
import {
  getConvoData
} from '../actions/actions.js'

class JournalPreview extends Component {  
  constructor(props) {
    super(props);
    this.state = {
      convoData: this.props.getConvoData() 
    };   
  }

  render() {
    console.log(this.props.convoData[0]);
    return (
      <div className="list-group" id="list-tab" role="tablist">
        <a className="list-group-item list-group-item-action active" id="list-entry1-list" data-toggle="list" href="#list-entry1" role="tab" aria-controls="entry1">
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">{this.props.convoData[0] ? this.props.convoData[0].time_created : ""}</h5>
          </div>
          <p className="mb-1">{this.props.convoData[0] ? this.props.convoData[0].flow[0].response : ""}</p>
        </a>
        <a className="list-group-item list-group-item-action" id="list-entry2-list" data-toggle="list" href="#list-entry2" role="tab" aria-controls="entry2">
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">{this.props.convoData[1] ? this.props.convoData[1].time_created : ""}</h5>
          </div>
          <p className="mb-1">{this.props.convoData[1] ? this.props.convoData[1].flow[0].response : ""}</p>
        </a>
        <a className="list-group-item list-group-item-action" id="list-entry3-list" data-toggle="list" href="#list-entry3" role="tab" aria-controls="entry3">
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">{this.props.convoData[2] ? this.props.convoData[2].time_created : ""}</h5>
          </div>
          <p className="mb-1">{this.props.convoData[2] ? this.props.convoData[2].flow[0].response : ""}</p>
        </a>
        <a className="list-group-item list-group-item-action" id="list-entry4-list" data-toggle="list" href="#list-entry4" role="tab" aria-controls="entry4">
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">{this.props.convoData[3] ? this.props.convoData[3].time_created : ""}</h5>
          </div>
          <p className="mb-1">{this.props.convoData[3] ? this.props.convoData[3].flow[0].response : ""}</p>
        </a>              
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
)(JournalPreview);