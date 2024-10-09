/**
 * 首页过滤器组件
 */
import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from '../store';
import { Lists } from './interface/Lists';
import { apiGetImages } from "../utils/apiGetImages";
import "../styles/ImgList.css";

interface ImgListProps {
    imgListData: Lists[];
};

const ImgList: React.FC<ImgListProps> = ({ imgListData }) => {
    const btnNames = "加载中...";
    const [lists, stateLists] = useState<Lists[]>([]);
    const getFiltersValue = useSelector((state: RootState) => state.filters);

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
    }, [getFiltersValue.color, getFiltersValue.size, getFiltersValue.tags]);

    return (
        <div className="img-lists">
            <ul>
                {lists.length > 0 ? (
                    lists.map((value, index) => (
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
                                    <img className="img" src={`${value.data.url}`} alt="" />
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
                    ))
                ) : (
                    <div className="err">没有搜索到对应条件的图。</div>
                )}
            </ul>
        </div>
    );
};

export default ImgList;