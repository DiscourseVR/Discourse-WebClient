import React from 'react'
import { getVideoIndex } from '../services/videos.service'

export default function Home() {

  return (
    <div>
    <h1>DiscourseVR</h1>

    <button onClick={makeRequest}>get!</button>
    </div>
  )
}

async function makeRequest(e) {
  e.preventDefault()
  const index = await getVideoIndex()
  console.log(index)
  
}
