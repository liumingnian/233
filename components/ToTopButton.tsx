/**
 * 返回页面顶部按钮
 */
import React, { useState, useEffect, use } from "react";
import "../styles/ToTopButton.css";

interface ToTopButtonProps { };

const ToTopButton: React.FC<ToTopButtonProps> = ({ }) => {
    const [buttonStyle, setButtonStyle] = useState<string>("none");
    const [scrollY, setScrollY] = useState<boolean>(false);

    const handleScroll = () => {
        if (window.scrollY >= 1000) {
            setScrollY(true);
            setButtonStyle("block");
        } else {
            setScrollY(false);
            setButtonStyle("none");
        }
        /** 滚动条递减，实现过度动画,待完善*/
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll)
        };
    }, []);

    const scrollToTop = () => {
        window.scroll({
            top: 0,
            behavior: "smooth",
        });
        setButtonStyle("none");
    };


    return (
        <div className="to-top-btn" onClick={scrollToTop}
            style={{ display: scrollY ? buttonStyle : buttonStyle }}>
            <img src="/imgs/totop.png" alt="" />
        </div>
    );
};

export default ToTopButton;