/**
 * 颜色筛选器
 */
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setFilterState } from '../store/filters';
import "../styles/Color.css"

interface ColorsProps { };

const Color: React.FC<ColorsProps> = ({ }) => {
    const dispatch = useDispatch();
    const [colorValue, setColorValue] = useState("");
    const [isVisible, setIsVisible] = useState(false);
    const [fontColor, setFontColor] = useState("");

    const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newColor = event.target.value;
        setColorValue(newColor);
        setIsVisible(true);
        setFontColor("");
    };

    const handleInputBlur = () => {
        if (colorValue.length === 7) {
            dispatch(setFilterState({ key: "color", value: colorValue }));
            dispatch(setFilterState({ key: "active", value: "color" }));
        }
    };

    useEffect(() => {
        if (colorValue.length === 7) {
            setFontColor(colorValue);
        }
    }, [colorValue]);

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
                        onBlur={handleInputBlur}
                        name="颜色选取" />
                </div>
            </div>
        </div>
    );
}

export default Color; 
