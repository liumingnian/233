/**
 * tag筛选器
 */
import React, { useState, useEffect } from "react";
import { RootState } from '../store';
import "../styles/SlideButton.css"

interface SlideButtonsProps {
    onClick?: () => void,
    bgColor?: React.CSSProperties,
    left?: React.CSSProperties,
};

const SlideButton: React.FC<SlideButtonsProps> = ({ onClick, bgColor, left }) => {
    return (
        <div className="slide-button"
            onClick={onClick}
            style={bgColor}>
            <div style={left}></div>
        </div>
    );
}

export default SlideButton; 
