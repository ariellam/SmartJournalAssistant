import React, { Component } from 'react';
import { connect } from "react-redux";
import '../styles/TitlePage.css';
import logo from '../images/logo.png'
import book from '../images/book.png'
import dash from '../images/dash.png'

import Image from './Image'

class TitlePage extends Component {
  render() {
    return (
      <div className="TitlePage mainView">
          <Image src={logo} width={400}/>
          <div className="buttonRow row mx-auto">
            <div className="col mx-auto">
              <button type="button" className="btn buttonStyle leftButtonStyle mx-auto">
                <Image src={book} width={175} />
                <p className="buttonText extraPadding">Journal</p>
              </button>
            </div>
            <div className="col">
              <button type="button" className="btn buttonStyle rightButtonStyle mx-auto">
                <Image src={dash} width={175}/>
                <p className="buttonText">Dashboard</p>
              </button>
            </div>
          </div>
      </div>
    );
  }
}

export default TitlePage;