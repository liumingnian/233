/**
 * 图片尺寸器&图片类型筛选
 */

import React, { useState, useEffect } from "react";
import { RootState } from '../store';
import "../styles/Selector.css"

interface SelectorsProps { };

interface Lists {
    name: string[],
    data: string[],
};

const lists: Lists[] = [
    {
        name: ["sizes", "图片尺寸"],
        data: [
            "1280 × 720",
            "1366 × 768",
            "1600 × 900",
            "1920 × 1080",
            "2340 × 1080",
            "2400 × 1080",
            "2560 × 1440",
            "2778 × 1284",
            "2880 × 1440",
        ],
    }, {
        name: ["tags", "图片类型"],
        data: [
            "风景",
            "桌面壁纸",
            "美少女",
            "插画",
            "游戏",
            "动漫",
            "3D",
        ],
    }
];

const Selector: React.FC<SelectorsProps> = ({ }) => {
    const [isVisible, setIsVisible] = useState<number | null>(null);
    const [isInputValue, setIsInputValue] = useState<string[]>(Array(lists.length).fill(""));
    const [isIconRotate, setIsIconRotate] = useState("rotate(0deg)");
    const [fontColor, setFontColor] = useState<string[]>(Array(lists.length).fill("#666666"));
    const setRotate = "rotate(180deg)";

    useEffect(() => { }, []);

    const btnOnClick = (index: number) => {
        setIsVisible(event => (event === index ? null : index));
        setIsIconRotate(setRotate);
    };
    const inputChange = (index: number, value: string) => {
        setIsInputValue(values => {
            const newValues = [...values];
            newValues[index] = value;
            return newValues;
        });
        setFontColor(values => {
            const newColor = [...values];
            newColor[index] = "#000000";
            return newColor;
        });
        setIsVisible(null);
    };

    return (
        <div className="selector">
            {
                lists.map((value, index) => (
                    <div className={`${value.name[0]}`} key={index}>
                        <div className="title">{value.name[0]}</div>
                        <div className="input">
                            <img src={`/icon/${value.name[0]}.svg`} alt="" className="tag-icon" />
                            <p style={{ color: fontColor[index] }}>
                                {isInputValue[index] === "" ? value.name[1] : isInputValue[index]}
                            </p>
                            <div className="selector-btn"
                                onClick={() => btnOnClick(index)}>
                                <img src={`/icon/down.svg`}
                                    alt=""
                                    style={{
                                        transform: isVisible === index
                                            ? isIconRotate
                                            : "rotate(0deg)"
                                    }} />
                            </div>
                        </div>
                        <div className="select-lists"
                            style={{ display: isVisible === index ? "block" : "none" }}>
                            {value.data.map((data, i) => (
                                <div key={i} onClick={() => inputChange(index, data)}>{data}</div>
                            ))}
                        </div>
                    </div>
                ))
            }
        </div>
    );
}

export default Selector; 
