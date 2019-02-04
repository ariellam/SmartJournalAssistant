import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom'
import JournalPage from './JournalPage';

class JournalPageWrapper extends Component {  
  constructor(props) {
    super(props);
    this.state = {
    };
    
  }

  render() {
    return (
      <div className="JournalPageWrapper">
        <Route exact path="/journal" component={JournalPage} />        
        {/* <JournalPage/>       */}
      </div>
    );
  }
}


export default withRouter(JournalPageWrapper);