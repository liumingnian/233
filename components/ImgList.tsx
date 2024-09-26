/**
 * 首页过滤器组件
 */
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from '../store';
import "../styles/ImgList.css";
import Button from "../components/Button"
import { Imgs } from "../utils/Imgs";

interface ImgListProps { };
interface Lists {
    name: string,
    data: {
        user: string,
        userIcon: string,
        state: boolean,
        size: string,
        messagesNumber: string,
        url: string,
        colors: string[],
        tags: string[],
    },
};

const lists: Lists[] = Imgs;

const ImgList: React.FC<ImgListProps> = ({ }) => {
    const btnNames = "加载中...";
    useEffect(() => { }, []);
    return (
        <div className="img-lists">
            <ul>
                {lists.map((value, index) => (
                    <li key={index}>
                        <div className="img-top-info">
                            <div className="user-icon">
                                <img src={`${value.data.userIcon}`} alt="" />
                            </div>
                            <div className="state-icon">
                                {(value.data.state)
                                    ? (<img src={"/icon/collect.svg"} alt="" />)
                                    : (<img src={"/icon/collect-folling.svg"} alt="" />)}
                                <p>收藏</p>
                            </div>
                        </div>
                        <div className="img-box">
                            <div className='img-bg-color'>
                                <img src={`${value.data.url}`} alt="" />
                            </div>
                        </div>
                        <div className="img-bottom-info">
                            <div className="colors">
                                {value.data.colors.map((v, i) => (
                                    <div style={{ backgroundColor: v }} key={i}></div>
                                ))}
                            </div>
                            <div className="infos">
                                <div className="info">
                                    <span>300</span>
                                    <img src={"/icon/info.svg"} alt="" />
                                </div>
                                <div className="collect">
                                    <span>100</span>
                                    <img src={"/icon/collect-folling.svg"} alt="" />
                                </div>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
            <div className="load-btn">
                <Button name={btnNames} />
            </div>
        </div>
    );
};

export default ImgList;