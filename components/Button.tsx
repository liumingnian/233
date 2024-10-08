/**
 * 通用按钮
 */
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "../styles/Button.css";

interface ButtonProps {
    name: string,
};

const Button: React.FC<ButtonProps> = ({ name }) => {
    useEffect(() => { }, []);
    return (
        <div className="btn">
            <div className="text c-btn">
                {name}
                <div className="wave"></div>
            </div>
        </div>
    );
};

export default Button;