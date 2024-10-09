/**
 * 图片尺寸器&图片类型筛选
 */

import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setFilterState } from '../store/filters';
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
            "横图",
            "竖图",
            "正方形"
        ],
    }, {
        name: ["tags", "图片标签"],
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
    const dispatch = useDispatch();
    const [isVisible, setIsVisible] = useState<number | null>(null);
    const [isInputValue, setIsInputValue] = useState<string[]>(Array(lists.length).fill(""));
    const [isIconRotate, setIsIconRotate] = useState<string>("rotate(0deg)");
    const [fontColor, setFontColor] = useState<string[]>(Array(lists.length).fill("#666666"));
    const setRotate = "rotate(180deg)";
    const [className, setClassName] = useState<string>("");

    const btnOnClick = (index: number) => {
        setIsVisible(event => (event === index ? null : index));
        setIsIconRotate(setRotate);
    };

    const inputChange = (index: number, value: string, className: string[]) => {
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
        setClassName(className[0]);
    };

    useEffect(() => {
        if (className === "sizes") {
            dispatch(setFilterState({ key: "size", value: isInputValue[0] }));
            dispatch(setFilterState({ key: "active", value: "size" }));
        }
        if (className === "tags") {
            dispatch(setFilterState({ key: "tags", value: isInputValue[1] }));
            dispatch(setFilterState({ key: "active", value: "tags" }));
        }
    }, [isInputValue, className]);

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
                                <div key={i} onClick={() => inputChange(index, data, value.name)}>{data}</div>
                            ))}
                        </div>
                    </div>
                ))
            }
        </div>
    );
}

export default Selector; 
