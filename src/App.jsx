import React from 'react'
import './App.css'

function App() {
  const images = [
    { name: 'Event1', filename: 'Event1.jpeg' },
    { name: 'Event2', filename: 'Event2.jpeg' },
    { name: 'Logo (JPG)', filename: 'logo.jpeg' },
    { name: 'Logo (PNG)', filename: 'logo.png' }
  ]

  const downloadImage = (filename) => {
    const link = document.createElement('a')
    link.href = `/images/${filename}`
    link.download = filename
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="container">
      <div className="header">
        <h1>Images Gallery</h1>
        <p>Download your images</p>
      </div>

      <div className="images-grid">
        {images.map((image, index) => {
          return (
            <div key={index} className="image-card">
              <div className="image-container">
                <img src={`/images/${image.filename}`} alt={image.name} />
              </div>

              <div className="image-details">
                <h3>{image.name}</h3>
                <p className="filename">{image.filename}</p>

                <button
                  onClick={() => downloadImage(image.filename)}
                  className="download-btn"
                >
                  Download
                </button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default App
