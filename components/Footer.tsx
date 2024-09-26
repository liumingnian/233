/**
 * 页脚
 */
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "../styles/Footer.css";

interface FooterProps { };

interface Lists {
    text: string[],
    icon: string[]
};

const lists: Lists = {
    text: ["© 233图库", "常见问题解答", "隐私政策", "关于我们", "API"],
    icon: ["/icon/twitter.svg", "/icon/weibo.svg", "/icon/facebook.svg"]
}

const Footer: React.FC<FooterProps> = ({ }) => {
    const [getTime, setTime] = useState<number | null>(null);

    useEffect(() => {
        const year = new Date().getFullYear();
        setTime(year)
    }, []);


    return (
        <div className="footer">
            <ul className="text">
                {lists.text.map((value, index) => (
                    (index === 0)
                        ? (<li className="time" key={index}>{value.replace(" ", ` ${getTime} `)}</li>)
                        : (<li key={index}>{value}</li>)
                ))}
            </ul>
            <ul className="icon">
                {lists.icon.map((value, index) => (
                    <li key={index}>
                        <img src={value} alt="" />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Footer;