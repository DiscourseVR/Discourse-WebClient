import React from 'react'
import { getVideoByName, getVideoIndex } from '../services/videos.service'

export function Home() {

  return (
    <div className="App">
      <header className="App-header">
        <h1>DiscourseVR</h1>

        <button onClick={makeRequest}>get!</button>
      </header>
    </div>
  )
}

async function makeRequest(e) {
  e.preventDefault()
  const index = await getVideoIndex()
  const res = await getVideoByName(index[0].name)
  console.log(res)
  
}
