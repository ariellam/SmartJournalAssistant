import React, { Component } from 'react';
import { connect } from "react-redux";
import '../style/TitlePage.css';

class TitlePage extends Component {
  render() {
    return (
      <div className="TitlePage">
        <h2>deScribe</h2>
        <div className="row">
          <div className="col-md-6">
            <button type="button" className="btn btn-primary">Journal</button>
          </div>
          <div className="col-md-6">
            <button type="button" className="btn btn-primary">Dashboard</button>
          </div>
        </div>
      </div>
    );
  }
}

export default TitlePage;