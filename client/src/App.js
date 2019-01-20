import React, { Component } from 'react';
import './App.css';
import TitlePage from './components/TitlePage';
import JournalPage from './components/JournalPage';
import DashboardPage from './components/DashboardPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <DashboardPage/>
      </div>
    );
  }
}

export default App;
