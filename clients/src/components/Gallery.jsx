import React from 'react'
import photo1 from '../assets/images/photo1.jpeg'
import photo2 from '../assets/images/photo2.jpeg'
import photo3 from '../assets/images/photo3.jpeg'
import photo4 from '../assets/images/photo4.jpeg'
import photo5 from '../assets/images/photo5.jpeg'
import '../assets/stylesheets/gallery.css'

const Gallery = () => {
  return (
    <section className="gallery">
        <div className="gallery-flex">
            <div className="photo-box photo2">
                <img src={photo2}/>
            </div>
            <div className="photo-box photo3">
                <img src={photo3}/>
            </div>
            <div className="photo-box photo2">
                <img src={photo4}/>
            </div>
            <div className="photo-box photo3 photo5">
                <img src={photo5}/>
            </div>
        </div>

    </section>
  )
}

export default Gallery