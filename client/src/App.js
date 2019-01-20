import React, { Component } from 'react';
import './App.css';
import TitlePage from './components/TitlePage';
<<<<<<< Updated upstream
import JournalPage from './components/JournalPage';
import DashboardPage from './components/DashboardPage';
=======
<<<<<<< Updated upstream
=======
import JournalPage from './components/JournalPage';
import DashboardPage from './components/DashboardPage';
import kiwi from "./images/kiwi.png";
import Image from "./components/Image";
>>>>>>> Stashed changes
>>>>>>> Stashed changes

class App extends Component {
  render() {
    return (
      <div className="App">
<<<<<<< Updated upstream
        <DashboardPage/>
=======
<<<<<<< Updated upstream
        <TitlePage/>
=======
        <ul className="nav sticky-top navbar-light border-bottom border-secondary">
          <li className="nav-item">
            <a className="nav-link smooth" href="/home">
              <p className="whiteText">deScribe</p>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link smooth" href="/journal">
              <p className="whiteText">Journal</p>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link smooth" href="/dash">
              <p className="whiteText">Dashboard</p>
            </a>
          </li>
          <li className="nav-item">
            <Image src={kiwi} width={50}></Image>
          </li>
        </ul>
>>>>>>> Stashed changes
>>>>>>> Stashed changes
      </div>
    );
  }
}

export default App;
