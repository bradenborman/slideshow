import React, { FC } from 'react';
import './controls.scss';

interface ControlsProps {
    onNext: () => void;
    onPrev: () => void;
    disableNext: boolean;
    disablePrev: boolean;
}

const Controls: FC<ControlsProps> = ({ onNext, onPrev, disableNext, disablePrev }) => {
    return (
        <div className="controls-container">
            <button className="button" onClick={onPrev} disabled={disablePrev}>
                Previous
            </button>
            <button className="button" onClick={onNext} disabled={disableNext}>
                Next
            </button>
        </div>
    );
};

export default Controls;
