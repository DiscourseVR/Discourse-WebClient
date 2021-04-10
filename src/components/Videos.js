import React, {Component} from 'react'
import { getVideoIndex } from '../services/videos.service'
import { Link } from "react-router-dom";

export default class Videos extends Component {
  constructor() {
    super();
    this.state= ( { videos: [{name: "zhehai"}] });
  }

  async componentDidMount(){
    console.log("lmao")
    const videos = await makeRequest();
    this.setState({ videos });
  }
  render() {
    return (
      <div>	
        {this.state.videos.map(video =>
        (<li key={video.name}> <Link to={video.name}> {video.name}</Link></li>))
        }        
      </div>
    )
  }
}

async function makeRequest() {
  const index = await getVideoIndex()
  return index;
}