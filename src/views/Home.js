import React from 'react'
import { getVideoIndex } from '../services/videos.service'
import VideoPlayer from '../components/VideoPlayer'

export default function Home() {
  return (
    <div>
      <h1>DiscourseVR</h1>

      <button onClick={makeRequest}>get!</button>

      <VideoPlayer vidUrl='https://files.discoursevr.space/vids/2021-04-10-14-17-33.mp4'></VideoPlayer>
    </div>
  )
}

async function makeRequest(e) {
  e.preventDefault()
  const index = await getVideoIndex()
  console.log(index)
  
}
