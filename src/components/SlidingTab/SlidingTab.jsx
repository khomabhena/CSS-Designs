import React from 'react'
import './sliding-tab.css'

const SlidingTab = () => {
  return (
      <div className="container">
          <div className="tabs">

            <input type="radio" id='radio-1' name='tabs' defaultChecked />
            <label htmlFor="radio-1" className="tab">Upcoming <span 
            className="notification">2</span> </label>

            <input type="radio" id='radio-2' name='tabs' />
            <label htmlFor="radio-2" className="tab">Developement</label>

            <input type="radio" id='radio-3' name='tabs' />
            <label htmlFor="radio-3" className="tab">Completed</label>
            <span className="glider"></span>
            
          </div>
      </div>
  )
}

export default SlidingTab