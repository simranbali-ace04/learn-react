import React from 'react'
import {Bookmark} from 'lucide-react'

const Card = () => {
  return (
    <div className='parent'>

      <div className="Card">

        <div className="top">
        <img src="https://tse1.mm.bing.net/th/id/OIP.wpNqjpz0C2hDt0OoxHrE2gHaEK?rs=1&pid=ImgDetMain&o=7&rm=3" alt="logo" /> 
        <button className="save-button">Save <Bookmark size={17} /></button>
        </div>

        <div className="center">
          <h3>Mediterranean Shipping Company (MSC)</h3>
          <h2>Java Backend Developer</h2>
          <div className="center-buttons">
          <button className='center-items'>Full time</button>
          <button className='center-items'>Fresher</button>
          </div>
        </div>

        <div className="gap"></div>

          <div className="bottom">
            <div className="left">
              <p className='pay'>$110/hr</p>
              <p className='location'>Noida, India</p>
            </div>
            <button className='apply-button-right'>Apply now</button>
          </div>
      </div>
    </div>
  )
}

export default Card
