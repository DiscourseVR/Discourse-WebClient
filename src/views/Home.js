import React from 'react'
import { getVideoIndex } from '../services/videos.service'

export default function Home() {
  return (
    <div>
      <h1>DiscourseVR</h1>

      <button onClick={makeRequest}>get!</button>

      <video src='https://files.discoursevr.space/vids/2021-04-10-09-24-16.mp4' autoPlay muted>
      </video>
    </div>
  )
}

async function makeRequest(e) {
  e.preventDefault()
  const index = await getVideoIndex()
  console.log(index)
  
}
