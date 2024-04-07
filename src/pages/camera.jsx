import React from 'react';

class Camera extends React.Component {
  constructor(props) {
    super(props);
    this.videoRef = React.createRef();
  }

  componentDidMount() {
    this.requestCameraAccess();
  }

  requestCameraAccess() {
    navigator.mediaDevices.getUserMedia({ video: true })
      .then((stream) => {
        this.videoRef.current.srcObject = stream;
      })
      .catch((error) => {
        console.error('Error accessing camera:', error);
      });
  }

  render() {
    return (
      <div>
        <h1>Camera Page</h1>
        <div>
          <video ref={this.videoRef} autoPlay playsInline />
        </div>
      </div>
    );
  }
}

export default Camera;
