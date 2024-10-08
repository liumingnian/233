/**
 * 颜色筛选器
 */
import React, { useState, useEffect } from "react";
import { RootState } from '../store';
import "../styles/Color.css"

interface ColorsProps { };

const Color: React.FC<ColorsProps> = ({ }) => {
    const [colorValue, setColorValue] = useState("");
    const [isVisible, setIsVisible] = useState(false);
    const [fontColor, setFontColor] = useState("");

    const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setColorValue(event.target.value);
        setIsVisible(true);
        setFontColor("#000000")
    };

    return (
        <div className="color">
            <div className="title">Color</div>
            <div className="input">
                <img src={`/icon/color.svg`} alt="" className="tag-icon" />
                <div>
                    <p style={{ display: isVisible ? "none" : "block" }}>颜色筛选</p>
                    <p style={{ display: isVisible ? "block" : "none", color: fontColor }}>{colorValue}</p>
                    <input type="color"
                        value={colorValue}
                        onChange={handleColorChange}
                        name="颜色选取" />
                </div>
            </div>
        </div>
    );
}

export default Color; 
