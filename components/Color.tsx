/**
 * 颜色筛选器
 */
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setFilterState } from '../store/filters';
import { RootState } from '../store';
import "../styles/Color.css"

interface ColorsProps {
    handleClear: boolean;
    onComplete: () => void;
};

const Color: React.FC<ColorsProps> = ({ handleClear, onComplete }) => {
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
        }
    };

    //显示16进制color code，且长度必须为7
    useEffect(() => {
        if (colorValue.length === 7) setFontColor(colorValue);
    }, [colorValue]);

    //清除按钮激活后清除过滤器的value,并重新加载图片
    useEffect(() => {
        if (handleClear) {
            setColorValue("");
            setIsVisible(false);
            dispatch(setFilterState({ key: "color", value: "clear" }));
            onComplete()
        }
    }, [handleClear]);

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
