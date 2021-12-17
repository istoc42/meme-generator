import React from 'react'

export default function Meme() {
  function getMemeImage() {
    console.log('Clicked')
  }

  return (
    <div className="meme-container">
      <div className="inputs-container">
        <input type="text" className="top-text-input" />
        <input type="text" className="bottom-text-input" />
      </div>
      <div className="btn-container">
        <button className="new-meme-btn" onClick={getMemeImage}>
          Get a new meme image
        </button>
      </div>
    </div>
  )
}
