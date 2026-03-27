import React from 'react'

const RightCardContent = (props) => {
  return (
    <div>
      <div className="absolute top-0 left-0 h-full w-full text-medium p-10 flex flex-col justify-between">
        <h2 className="bg-white flex rounded-full justify-center items-center h-10 w-10 text-2xl font-bold">
          {props.num}
        </h2>
        <div>
          <p className="text-white mb-4 font-bold">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id nobis
            quas repellendus officia cupiditate in saepe atque iusto beatae
            velit!
          </p>

          <button style={{backgroundColor: props.color}} className="flex items-center gap-2 w-fit rounded-full px-4 py-2 font-bold text-medium text-white">
            {props.tag}
            <i className="ri-arrow-right-line"></i>
          </button>
        </div>
      </div>
    </div>
  )
}

export default RightCardContent
