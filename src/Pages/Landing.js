import React from 'react'
import "./Landing.css"
import { Link } from 'react-router-dom'

function Landing() {
  return (
    <div>
      <div className='cover-page'>
        <div className='content'>
          <h1>Flavor<span>Folio</span></h1>
          <p>"Your personal recipe organizer"</p>
          <Link to={'/home'}><button className='start-button'>Get Started</button></Link>
        </div>
       

      </div>
    </div>
  )
}

export default Landing
