/**
 * 首页过滤器组件
 */
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from '../store';
import "../styles/Filters.css"
import { MultilingualText } from "../utils/MultilingualText"

interface FiltersProps { };

const Filters: React.FC<FiltersProps> = ({ }) => {
    const language = useSelector((state: RootState) => state.language);
    useEffect(() => { }, []);
    return (
        <div className="filters">
            {MultilingualText.filters.map((value, index) => (
                <div className={`filters-${value.title['EN']}`} key={index}>
                    <div className="title">{value.title[language]}</div>
                    <div className="box">{value.title[language]}</div>
                </div>
            ))}
        </div>
    );
};

export default Filters;