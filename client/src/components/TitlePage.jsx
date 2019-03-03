import React, { Component } from 'react';
import { connect } from "react-redux";
import '../styles/TitlePage.css';
import logo from '../images/logo.png'
import book from '../images/book.png'
import dash from '../images/dash.png'
import { Link } from 'react-router-dom'

import Image from './Image'
import {
  getConvoData
} from '../actions/actions.js'

class TitlePage extends Component {
  constructor(props) {
    super(props);
    // this.props.getConvoData(); 
  }

  render() {
    return (
      <div className="TitlePage mainView">
          <Image src={logo} width={400}/>
          <div className="buttonRow row mx-auto">
            <div className="col mx-auto">
            <Link to="/journal">
              <button type="button" className="btn buttonStyle leftButtonStyle mx-auto">
                <Image src={book} width={175} />
                <p className="buttonText extraPadding">Journal</p>
              </button>
              </Link>
            </div>
            <div className="col">
              <Link to="/dashboard">
              <button type="button" className="btn buttonStyle rightButtonStyle mx-auto">
                <Image src={dash} width={175}/>
                <p className="buttonText">Dashboard</p>
              </button>
              </Link>
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

// function mapDispatchToProps(dispatch) {
//   return {
//     getConvoData: () => dispatch(getConvoData())
//   };
// }

// export default connect(
//   mapStateToProps, mapDispatchToProps
// )(TitlePage);

export default TitlePage;