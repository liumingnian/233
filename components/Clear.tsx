/**
 * 清除按钮
 */
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setFilterState } from '../store/filters';
import "../styles/Clear.css";

interface ClearProps {
    setHandleClear: (clear: boolean) => void,
};

const Clear: React.FC<ClearProps> = ({ setHandleClear }) => {
    const handleClear = () => {
        setHandleClear(true);
    };
    return (
        <div className="clear-btn">
            <div onClick={handleClear}>
                <img src={`/icon/Invalid_clear.svg`} alt="" />
            </div>
        </div>
    );
};

export default Clear;