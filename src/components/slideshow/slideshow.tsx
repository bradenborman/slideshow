import React, { FC, useState } from 'react';
import Controls from '../controls/controls';
import './slideshow.scss';

interface Item {
    src: string;
    set: string;
    name: string;
    color: string;
}

const Slideshow: FC = () => {
    const imagePaths: Item[] = [
        { src: "snorlax-z.jpg", set: "Black Star Promo", name: "Snorlax Z", color: "rgb(215,217,219)" }, //Top card
        { src: "charizard.png", set: "Base Set", name: "Charizard", color: "rgb(237,177,134)" },
        { src: "politoad.jpg", set: "Neo Discovery", name: "Politoed", color: "rgb(103,177,210)" }
    ];

    const [currentIndex, setCurrentIndex] = useState<number>(imagePaths.length - 1);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex < imagePaths.length - 1 ? prevIndex + 1 : prevIndex));
    };

    return (
        <>
            <div className="slideshow-container">
                <div className="slideshow">
                    {imagePaths.map((item: Item, index) => {
                        const randomRotation = (Math.random() * 10) - 5;
                        // Calculate the lighter color
                        const lighterFactor = 1.5; // You can adjust this factor to make it lighter
                        const lighterColor = `rgb(${Math.floor(lighterFactor * parseInt(item.color.slice(4, -1).split(',')[0]))},${Math.floor(lighterFactor * parseInt(item.color.slice(4, -1).split(',')[1]))},${Math.floor(lighterFactor * parseInt(item.color.slice(4, -1).split(',')[2]))})`;

                        // Apply the gradient style to the item-wrapper div
                        const gradientStyle: React.CSSProperties = {
                            background: `linear-gradient(to right, ${lighterColor}, ${item.color})`,
                        };

                        return (
                            <div key={index} className={`${index === currentIndex ? 'active' : ''} item-wrapper`}>
                                <div className="card-info" style={gradientStyle}>
                                    <div>
                                        <span className="set">
                                            {item.set}
                                        </span>
                                        <span className="countdown">
                                            {index + 1}
                                        </span>
                                    </div>
                                    <div className="name">
                                        {item.name}
                                    </div>
                                </div>
                                <img
                                    className='slideshow-img'
                                    src={`images/${item.src}`}
                                    alt={`Item ${index + 1}`}
                                    style={{
                                        transform: `rotate(${index === currentIndex ? 0 : randomRotation}deg)`,
                                    }}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
            <Controls
                onNext={handleNext}
                onPrev={handlePrev}
                disableNext={currentIndex === 0}
                disablePrev={currentIndex === imagePaths.length - 1}
            />
        </>
    );
};

export default Slideshow;
