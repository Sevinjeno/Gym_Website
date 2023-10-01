import React from 'react'
import workout from '../assets/workout.mp4'
const VideoPlay = () => {
  return (
    <div className='__VideoPlay'>
        <video src={workout} autoPlay loop muted/>
        <div className='content'>
            <p>Rebuild with <span className='hightlight'>Purpose</span>, reclaim with <span className='hightlight'>Passion.</span></p>
            <p>Join us now on the path to a <span className='hightlight'>better you.</span></p>
            <button>Contact</button>
        </div>
    </div>
  )
}

export default VideoPlay