/**
 * 首页过滤器组件
 */
import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { setFilterState } from '../store/filters';
import { RootState } from '../store';
import { Lists } from './interface/Lists';
import { toImgInfo, toUserInfo } from "./router/routes";
import { apiGetImages } from "../utils/apiGetImages";
import Link from "next/link";
import "../styles/ImgList.css";

interface ImgListProps {
    imgListData: Lists[];
};

const ImgList: React.FC<ImgListProps> = ({ imgListData }) => {
    const [lists, stateLists] = useState<Lists[]>([]);
    const getFiltersValue = useSelector((state: RootState) => state.filters);
    const noImgInfo: string[] = ["没有找到符合您的图片，请修改搜索内容后在一次检索。"];
    // const hasUpdatedRef = useRef(false);

    //刷新加载获取图片列表
    useEffect(() => {
        const getImgs = async () => {
            const res = await fetch("/api/imgsRouter");
            const data = await res.json();
            stateLists(data);
        };
        getImgs();
    }, []);

    //检索框数据获取
    useEffect(() => {
        stateLists([]);
        stateLists(prevLists => [...prevLists, ...imgListData]);
    }, [imgListData]);

    //color&size&tags检索并获取数据
    useEffect(() => {
        const fetchFiltersData = async () => {
            const response = await apiGetImages("/api/inputRouter", getFiltersValue);
            stateLists(response);
        }
        fetchFiltersData();
    }, [getFiltersValue.color,
    getFiltersValue.size,
    getFiltersValue.tags,
    getFiltersValue.grade]);

    return (
        <div className="img-lists">
            <ul>
                {lists.length > 0 ? (
                    lists.map((value, index) => (
                        <li key={index}>
                            <div className="img-top-info">
                                <Link href={toUserInfo.userInfo.path}>
                                    <div className="user-icon">
                                        <img src={`${value.data.userIcon}`} alt="" />
                                    </div>
                                </Link>
                                <div className="state-icon">
                                    {(value.data.state)
                                        ? (<img src={"/icon/collect.svg"} alt="" />)
                                        : (<img src={"/icon/collect-folling.svg"} alt="" />)}
                                    <p>收藏</p>
                                </div>
                            </div>
                            <div className="img-box">
                                <Link href={toImgInfo.imgInfo.path}>
                                    <div className='img-bg-color'>
                                        <img className="img" src={`${value.data.url}`} alt="" />
                                    </div>
                                </Link>
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
                    ))
                ) : (
                    <div className="no-img-info">{noImgInfo}</div>
                )}
            </ul>
        </div>
    );
};

export default ImgList;