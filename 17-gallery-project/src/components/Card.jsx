import React from 'react'

const Card = (props) => {
  return (
    <div className="h-60 w-60 rounded-xl mb-8" key={props.idx}>
          <a href={props.elem.url}>
            <img
              className="h-full w-full object-fill"
              src={props.elem.download_url}
              alt={props.elem.author}
            />
            <div className="font-bold text-xl overflow-hidden text-ellipsis whitespace-nowrap">
              {props.elem.author}
            </div>
          </a>
        </div>
  )
}

export default Card
