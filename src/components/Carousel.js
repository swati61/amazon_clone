import React, { useEffect, useRef, useState } from "react";
import "../css/Carousel.css";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

const delay = 2500;
const iconSize = 60;

function CarouselA(props) {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeHandler();
  }, [index]);

  const timeHandler = () => {
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === props.images.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  };

  const handleNextSlide = () => {
    resetTimeout();
    if (index < props.images.length - 1) {
      setIndex((prevIndex) => prevIndex + 1);
    } else {
      timeHandler();
    }
  };

  const handlePrevSlide = () => {
    resetTimeout();
    if (index > 0) {
      setIndex((prevIndex) => prevIndex - 1);
    } else {
      timeHandler();
    }
  };

  return (
    <>
      <div className="slideshow">
        <div
          className="slideshowSlider"
          style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
        >
          {props.images.map((image, index) => (
            <div
              className="slide"
              key={index}
              style={{ backgroundImage: `url(${image})` }}
            ></div>
          ))}
        </div>
      </div>

      <div className="arrowButtons">
        <div className="marLeft">
          <ArrowBackIosIcon
            style={{ fontSize: iconSize }}
            onClick={handlePrevSlide}
          />
        </div>
        <div className="marRight">
          <ArrowForwardIosIcon
            style={{ fontSize: iconSize }}
            onClick={handleNextSlide}
          />
        </div>
      </div>
    </>
  );
}

export default CarouselA;
