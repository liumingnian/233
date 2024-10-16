/**
 * 首页过滤器组件
 */
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from '../store';
import "../styles/Filters.css";
import Color from "./Color";
import Selector from "./Selector";
import Clear from "./Clear";
import Grade from "./Grade";

interface FiltersProps {

};

const Filters: React.FC<FiltersProps> = ({ }) => {
    useEffect(() => { }, []);
    const [handleClear, setHandleClear] = useState<boolean>(false);

    const handleClearEvent = (clear: boolean) => {
        setHandleClear(clear);
    }
    const resetHandleClear = () => {
        setHandleClear(false); 
      };

    return (
        <div className="filters">
            <Color handleClear={handleClear} onComplete={resetHandleClear}/>
            <Selector />
            <Clear setHandleClear={handleClearEvent} />
            <Grade />
        </div>
    );
};

export default Filters;