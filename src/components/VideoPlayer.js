import React, { Component } from 'react'
import PropTypes from 'prop-types'

class VideoPlayer extends Component {

  constructor() {
    super()
    this.state = { }
    this.videoRef = React.createRef()
  }

  render() {
    const curTime = this.videoRef.current
    console.log(curTime)
    return (
      <div>
        <p>{ this.props.vidUrl }</p>
        <p>Current time: { curTime }</p>
        <video controls autoPlay muted id='video-embed' ref={ this.videoRef }>
          <source src={ this.props.vidUrl }></source>
        </video>
      </div>
    )
  }

  static get propTypes() {
    return {
      vidUrl: PropTypes.string
    }
  }

}

export default VideoPlayer