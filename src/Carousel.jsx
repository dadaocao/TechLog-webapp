import {useState} from 'react';

import image1 from './image1.jpeg';
import image2 from './image2.jpeg';
import image3 from './image3.jpeg';
import image4 from './image4.jpeg';
import image5 from './image11.jpeg';

import './Carousel.css';

function Carousel() {
    const [activeIndex, setActiveIndex] = useState(0);

    const slides = [image1, image2, image3, image4, image5];

    const alt = [
        "This is a photo displaying an macbook",
        "This is a photo displaying a man in front of three screens",
        "This is a photo displaying a computer and a notebook",
        "This is a photo displaying a gorgeous glass ball",
        "This is a photo displaying a banana (great symbol of amazon)"
    ];


    const handlePrevClick = () => {
        setActiveIndex(activeIndex === 0 ? slides.length - 1 : activeIndex - 1);
    };

    const handleNextClick = () => {
        setActiveIndex(activeIndex === slides.length - 1 ? 0 : activeIndex + 1);
    };

    return (
        <div className="carousel">
            <button className="prev__button" aria-label="click to previous picture" onClick={handlePrevClick}>Prev
            </button>
            <div className="carousel-inner">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`carousel-item ${index === activeIndex ? 'active' : ''}`}
                        style={{width: "100%"}}>
                        <img src={slide} alt={alt[index]} style={{width: "100%", height: "auto"}}/>
                    </div>
                ))}
            </div>
            <button className="next__button" aria-label="click to next picture" onClick={handleNextClick}>Next</button>
        </div>
    );
}

export default Carousel;
