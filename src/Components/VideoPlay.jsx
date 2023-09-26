import React from 'react'
import workout from '../assets/workout.mp4'
const VideoPlay = () => {
  return (
    <div className='__VideoPlay'>
        <video src={workout} autoPlay loop muted/>
        <div className='content'>
            <p>Rebuild with purpose, reclaim with passion.</p>
            <p>Join us now on the path to a better you.</p>
            <button>Contact</button>
        </div>
    </div>
  )
}

export default VideoPlay