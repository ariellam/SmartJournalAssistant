import React, { Component } from 'react';
import { connect } from 'react-redux';
import JournalPreview from './JournalPreview';
import JournalText from './JournalText';
import {
  getConvoData
} from '../actions/actions.js'

class JournalPage extends Component {  
  constructor(props) {
    super(props);
    this.state = {
      // convoData: this.props.getConvoData() 
    };
    
  }

  render() {
    // console.log(this.props.convoData[0]);
    return (
      <div className="JournalPage">
        <div className="row">
          <div className="col-4">
            <JournalPreview/>
          </div>
          <div className="col-8">
            <JournalText/>
          </div>
        </div>        
      </div>
    );
  }
}

// const mapStateToProps = state => {
//   return {
//     convoData: state.convoData
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     getConvoData: () => dispatch(getConvoData())
//   };
// }

// export default connect(
//   mapStateToProps, mapDispatchToProps
// )(JournalPage);

export default JournalPage;