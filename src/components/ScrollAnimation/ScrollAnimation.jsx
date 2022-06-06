import React from 'react'
import './scroll-animation.css'
import Img from '../../img/mesh.png'

const ScrollAnimation = () => {

    const boxes = document.querySelectorAll(".box");

    const checkBoxes = () => {
        const triggerBottom = (window.innerHeight / 5) * 4;
        boxes.forEach((box) => {
            const boxTop = box.getBoundingClientRect().top;
            if (boxTop < triggerBottom) box.classList.add("show");
            else box.classList.remove("show");
        })
    }

    window.addEventListener("scroll", checkBoxes)
    checkBoxes();


  return (
      <div className="scroll-container" style={{'background': 'red', 'background-image': {Img}}}>
          <h1>Scroll to see animation</h1>
          <div className="box"><h2>Content</h2></div>
          <div className="box"><h2>Content</h2></div>
          <div className="box"><h2>Content</h2></div>
          <div className="box"><h2>Content</h2></div>
          <div className="box"><h2>Content</h2></div>
          <div className="box"><h2>Content</h2></div>
          <div className="box"><h2>Content</h2></div>
          <div className="box"><h2>Content</h2></div>
          <div className="box"><h2>Content</h2></div>
      </div>
  )
}

export default ScrollAnimation