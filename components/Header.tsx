/**
 * 首页组件
 */
import React, { use, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { navRoutes, upAndLoginRoutes } from "./router/routes";
import '../styles/Header.css';

interface HeaderProps { };

const Header: React.FC<HeaderProps> = ({ }) => {
    const navMenuSpacing = (i: number, direction: string) => {
        if (i == 0 && direction == "left") return "logo";
        if (i != 0 && direction == "left") return "list";
        return "";
    };

    return (
        <header>
            <div className="nav">
                <ul className="nav-left">
                    {Object.values(navRoutes).map((route, index) => (
                        <li className={navMenuSpacing(index, "left")} key={index}>
                            {route.name.endsWith(".svg") ? (
                                <img src={route.name} alt={``} />
                            ) : (
                                <Link href={route.path}
                                    key={index}
                                    passHref>
                                    {route.name}
                                </Link>
                            )}
                        </li>
                    ))}
                </ul>
                <ul className="nav-right">
                    <li>
                        <Link href={upAndLoginRoutes.upLoad.path} className="nav-upload c-btn">
                            <img src={`/icon/upload.svg`} alt="" />
                        </Link>
                    </li>
                    <li>
                        <Link href={upAndLoginRoutes.login.path} className='nav-login c-btn'>
                            <img src={`/icon/user-invalid.svg`} alt="" />
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
    )
};
export default Header;
