/**
 * 首页过滤器组件
 */
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from '../store';
import "../styles/Filters.css";
import Color from "./Color";
import Selector from "./Selector";
import Grade from "./Grade";

interface FiltersProps {
};

const Filters: React.FC<FiltersProps> = ({ }) => {
    useEffect(() => { }, []);
    return (
        <div className="filters">
            <Color />
            <Selector />
            <Grade />
        </div>
    );
};

export default Filters;