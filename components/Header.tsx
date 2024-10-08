/**
 * 首页组件
 */
import Link from 'next/link';
import '../styles/Header.css';
import { use, useEffect, useState } from 'react';

interface HeaderProps { };

const Header: React.FC<HeaderProps> = ({ }) => {
    const menuList = {
        left: ["/next.svg", "首页", "推荐", "每周排行", "图组专辑"],
        toLink: ["", "/", "/router/Recommended", "/router/Rankings", "/router/Collection"],
    };

    function navMenuSpacing(i: number, direction: string) {
        if (i == 0 && direction == "left") return "logo";
        if (i != 0 && direction == "left") return "list";
        return "";
    };

    return (
        <header>
            <div className="nav">
                <ul className="nav-left">
                    {menuList.left.map((link, index) => (
                        <li className={navMenuSpacing(index, "left")} key={index}>
                            {link.endsWith(".svg") ? (
                                <img src={link} alt={``} />
                            ) : (
                                <Link href={menuList.toLink[index]}
                                    passHref>
                                    {link}
                                </Link>
                            )}
                        </li>
                    ))}
                </ul>
                <ul className="nav-right">
                    <li>
                        <Link href={"/router/UpLoad"} className="nav-upload c-btn">
                            <img src={`/icon/upload.svg`} alt="" />
                        </Link>
                    </li>
                    <li>
                        <Link href={"/router/Login"} className='nav-login c-btn'>
                            <img src={`/icon/user-invalid.svg`} alt="" />
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
    )
};
export default Header;
