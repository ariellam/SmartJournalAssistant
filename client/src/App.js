import React, { Component } from 'react';
import './App.css';
import TitlePage from './components/TitlePage';
import JournalPage from './components/JournalPage';
import DashboardPage from './components/DashboardPage';
import kiwi from "./images/kiwi.png";
import Image from "./components/Image";

class App extends Component {
  render() {
    return (
      <div className="App">
        <ul className="nav sticky-top navbar-light border-bottom border-secondary">
          <li className="nav-item">
            <a className="nav-link smooth" href="/home">
              <p className="whiteText">deScribe</p>
            </a>
          </li>
          <li className="nav-item">
            <Image src={kiwi} width={50}></Image>
          </li>
        </ul>
        <div className="items">
          <div className="item">
            <JournalPage />
          </div>
          <div className="item">
            <TitlePage/>
          </div>
          <div className="item">
            <DashboardPage/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
