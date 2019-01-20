import React, { Component } from 'react';
import { connect } from "react-redux";
import Image from './Image';

class ImageModal extends Component {
  render() {
    console.log("rendering modal")
    console.log(this.props)
    return (
      <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog model-dialog-centered modal-xl" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Image Details</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-6">
                    <Image src={this.props.imageData.picture}/>
                  </div>
                  <div className="col-md-6">
                    <h5>User Information</h5>
                    <p>Name: {this.props.userData.name}</p>
                    <p>Likes: {this.props.imageData.likes}</p>
                    <p>Comments: {this.props.imageData.comments}</p>
                    <p>Tags: {JSON.stringify(this.props.imageData.tags)}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div> 
    );
  }
}

const mapStateToProps = state => {
  return {
    userData: state.userData,
    imageData: state.imageData
  };
};

export default connect(mapStateToProps)(ImageModal);
