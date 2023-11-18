import React, { FC, useState } from 'react';
import Controls from '../controls/controls';
import './slideshow.scss';

const Slideshow: FC = () => {
    const imagePaths: string[] = ["snorlax-z.jpg", "charizard.png"]
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === imagePaths.length - 1 ? 0 : prevIndex + 1));
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? imagePaths.length - 1 : prevIndex - 1));
    };

    return (
        <>
            <div className="slideshow-container">
                <div className="slideshow">
                    {imagePaths.map((path, index) => {
                        const randomRotation = (Math.random() * 10) - 5;
                        return (
                            <img
                                key={index}
                                className={`slideshow-item ${index === currentIndex ? 'active' : ''}`}
                                src={`../../images/${path}`}
                                alt={`Item ${index + 1}`}
                                style={{
                                    transform: `rotate(${index === currentIndex ? 0 : randomRotation}deg)`,
                                }}
                            />
                        );
                    })}
                </div>
            </div>
            <Controls onNext={handleNext} onPrev={handlePrev} />
        </>
    );
};

export default Slideshow;
