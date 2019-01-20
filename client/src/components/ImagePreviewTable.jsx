import React, { Component } from 'react';
import { connect } from "react-redux";
import Image from './Image';
import {
  setUserData,
  setImageData,
  setAllImageData
} from '../actions/actions'

class ImagePreviewTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageData: []
    };    
  }
  
  componentWillMount() {
    // fetch all content
    fetch("http://localhost:3001/content",
      { method: 'GET' }
    )
      .then(res => res.json())
      .then(data => 
        {this.setState({imageData: data.data});}
        )
      .catch(err => console.log(err));
  }

  render() {
    console.log(this.props)
    
    return (
      <div>
        <h1> Content-Hub </h1>
        <div className="col-md-2"/>
          {this.state.imageData.map((data) => (
              <div className="col-md-2" data-toggle="modal" data-target="#exampleModal" image-id={data.id} user-id={data.user_id} 
                    onClick={() => {this.props.setUserData(data.user_id); this.props.setImageData(data.id)}}>
                {               
                  <Image
                  src={data.picture}              
                  />
                }
              </div>
          ))}
        <div className="col-md-2"/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    allImageData: state.allImageData
  };
};

function mapDispatchToProps(dispatch) {
  return {
    setUserData: data => dispatch(setUserData(data)),
    setImageData: data => dispatch(setImageData(data)),
    setAllImageData: () => dispatch(setAllImageData())
  };
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(ImagePreviewTable);


