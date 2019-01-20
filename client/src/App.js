import React, { Component } from 'react';
import './App.css';
import ImagePreviewTable from './components/ImagePreviewTable';
import ImageModal from './components/ImageModal';

class App extends Component {
  render() {
    return (
      <div className="App">  
        <ImageModal/>
        <ImagePreviewTable />
      </div>
    );
  }
}

export default App;
