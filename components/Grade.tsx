/**
 * 年龄等级筛选
 */
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { RootState } from '../store';
import { setFilterState } from '../store/filters';
import SlideButton from './SlideButton';
import "../styles/Grade.css"

interface GradesProps {

};

const btnList: string[] = [
    "R15",
    "R18"
];

const Grade: React.FC<GradesProps> = ({ }) => {
    const dispatch = useDispatch();
    const [btn, setBtn] = useState<number | null>(0);
    const btnChange = (index: number) => {
        setBtn(index);
        dispatch(setFilterState({ key: "grade", value: String(index) }));
    };


    return (
        <div className="grade">
            {btnList.map((value, index) => (
                <div key={index}
                    className={(index === 0) ? ("active") : ("")}>
                    <div className="title">{value}</div>
                    <SlideButton onClick={() => btnChange(index)}
                        bgColor={{ backgroundColor: btn === index ? "#0099FF" : "#f0f0f0" }}
                        left={{ marginLeft: btn === index ? "42px" : "2px" }}
                    />
                </div>
            ))}
        </div>
    );
}

export default Grade; 
