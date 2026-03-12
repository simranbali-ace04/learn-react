import React from 'react'
import {Bookmark} from 'lucide-react'

const Card = (props) => {
  return (

      <div className="Card">

        <div className="top">
        <img src={props.logo} alt="logo" />
        <button className="save-button">Save <Bookmark size={17} /></button>
        </div>

        <div className="center">
          <h3>{props.company}</h3>
          <h2>{props.role}</h2>
          <div className="center-buttons">
          <button className='center-items'>{props.type}</button>
          <button className='center-items'>{props.level}</button>
          </div>
        </div>

        <div className="gap"></div>

          <div className="bottom">
            <div className="left">
              <p className='pay'>{props.pay}</p>
              <p className='location'>{props.location}</p>
            </div>
            <button className='apply-button-right'>Apply now</button>
          </div>
      </div>
  )
}

export default Card
