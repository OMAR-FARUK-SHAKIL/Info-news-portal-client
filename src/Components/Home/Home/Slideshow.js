import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import img1 from "../../../images/slide_2.jpg";
import img2 from "../../../images/slide_3.jpg";
import img3 from "../../../images/slide_4.jpg";

const slideImages = [
  '../../../images/slide_2.jpg',
  '../../../images/slide_3.jpg',
  '../../../images/slide_4.jpg'
];

const Slideshow = () => {
    return (
      <div className="slide-container">
        <Slide>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
            <img src={img1} alt="Girl in a jacket" width="800" height="250"/> 
              {/* <span>Slide 1</span> */}
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
            <img src={img2} alt="Girl in a jacket" width="800" height="250"/> 
              {/* <span>Slide 2</span> */}
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
            <img src={img3} alt="Girl in a jacket" width="800" height="250"/> 
              {/* <span>Slide 3</span> */}
            </div>
          </div>
        </Slide>
      </div>
    )
}
export default Slideshow;