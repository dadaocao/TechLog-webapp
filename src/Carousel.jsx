import {useState} from 'react';

// import image1 from './image1.jpeg';
import image2 from './image2.jpeg';
import image3 from './image3.jpeg';
import image4 from './image4.jpeg';
import image5 from './image5.jpeg';
import image6 from './image6.jpeg';
import image7 from './image7.jpeg';

import './Carousel.css';

function Carousel() {
    const [activeIndex, setActiveIndex] = useState(0);

    const slides = [image2, image3, image4, image5, image6, image7];

    const alt = [
        "This is my first Java Spring Boot project",
        "This is backend of the project",
        "This is front desk demonstration, Only email-authenticated users can sign in!",
        "Welcome to my Dadaocao Travel Website",
        "This is my first Python project using Django framework",
        "It includes a translator(*^▽^*)",
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
                        style={{width: "70%", height:"80%"}}>
                        <img src={slide} alt={alt[index]} style={{width: "100%", height: "auto"}}/>
                    </div>
                ))}
            </div>
            <button className="next__button" aria-label="click to next picture" onClick={handleNextClick}>Next</button>
        </div>
    );
}

export default Carousel;
