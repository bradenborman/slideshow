import React, { FC } from 'react';
import './controls.scss';

const Controls: FC<{ onNext: () => void; onPrev: () => void }> = ({ onNext, onPrev }) => {
    return (
        <div className="controls-container">
            <button className="button" onClick={onPrev}>
                Previous
            </button>
            <button className="button" onClick={onNext}>
                Next
            </button>
        </div>
    );
};

export default Controls;
