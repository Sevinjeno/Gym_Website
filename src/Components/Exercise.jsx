import React from 'react'
import "./Exercise.css"
import cable from "/cable crossover.jpg"
import squat from "/squatrock.jpg"
import leg from "/leg_extension.jpg"
import smith from "/smithmachine.jpg"
import lat from "/lat_pull.jpg"
import rope from "/rope climbing.jpg"

const Exercise = () => {
  return (
<div className='Exercise' id="Exercises">

<div id="p1">Unleash your Inner Warrior at D Fitness.</div>
      <div id="p2"> Our exercises are a testament to the art of fitness, and our trainers are your greatest allies. </div>
    <div className='Exercise_Main'>
         <div className="card">
           <div className="cardImage">
           <img src={squat} />
            <h2>Squat Rock</h2>
            <p> Strengthens your core,Reduces the risk of injury,Crushes calories,Boosts athletic ability and strength.</p>
           </div>
         </div>

         <div className="card">
           <div className="cardImage">
           <img src={cable}/> 
            <h2>Cable Crossover</h2>
            <p>It offer's versatile, constant tension exercises for targeted muscle isolation, stability.</p>
           </div>
         </div>

         <div className="card">
           <div className="cardImage">
           <img src={leg} />
            <h2>Leg Extension</h2>
            <p>They offer variable resistance, engage specific muscles, aid in rehab, prevent imbalances, save time and help define leg muscles.</p>
           </div>
         </div>

         <div className="card">
           <div className="cardImage">
           <img src={lat} />
            <h2>Lat Pull Down</h2>
            <p>Strengthen upper back and lats,Improve grip and forearm strength,Enhance overall upper body muscle development.</p>
           </div>
         </div>

         <div className="card">
           <div className="cardImage">
           <img src={smith} />
            <h2>Smith Machine</h2>
            <p>Guided movements,Safety with built-in spotter,Assists in muscle isolation,Suitable for solo workouts.</p>
           </div>
         </div>

         <div className="card">
           <div className="cardImage">
           <img src={rope} />
            <h2>Rope Climbing</h2>
            <p>Enhances cardiovascular fitness,Improves coordination and agility,Engages core muscles.</p>
           </div>
         </div>
    </div>
    <div id="p3">Join us, and let's conquer new heights together</div>

</div>
      
  )
}

export default Exercise