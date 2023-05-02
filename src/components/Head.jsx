import React from 'react'

const Head = ({ text, textSize = 'text-3xl' }) => {
  return (
    <div className="flex w-full justify-between border-b-red-600 border-b-4 pb-7">
        <p className={`text-black ${textSize} font-bold`}>{text}</p>
    </div>
  )
}

export default Head
