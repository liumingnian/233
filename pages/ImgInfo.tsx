import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { RootState } from '../store';
import Header from "../components/Header";
import Button from "../components/Button";
import "../styles/ImgInfo.css";

interface imgInfoProps { };

const ImgInfo: React.FC<imgInfoProps> = ({ }) => {
    return (
        <div className="bg-color">
            <Header />
            <div className="img-info">
                <div className="img-related-info">
                    <div className="img-info-box">
                        <div className="img">
                            <img src="/imgs/img_1.jpg" alt="" />
                        </div>
                        <div className="info">
                            <div className="img-title">
                                <div className="name t-font-color">金木犀の騎士</div>
                                <div className="icon">
                                    <div>
                                        <img src="/icon/collect.svg" alt="" />
                                    </div>
                                    <div>
                                        <img src="/icon/collect.svg" alt="" />
                                    </div>
                                </div>
                            </div>
                            <ul className="tags">
                                <li>#爱丽丝</li>
                                <li>#刀剑神域</li>
                                <li>#ソードアート・オンライン</li>
                            </ul>
                            <div className="text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget.
                            </div>
                        </div>
                    </div>
                    <div className="related-info-box">
                        <div className="user-info">
                            <div className="user-icon">
                                <img src="/imgs/user_icon/user_icon.jpg" alt="" />
                            </div>
                            <div className="user-synopsis">
                                <div className="user-name">ITAZURA</div>
                                <div className="user-title">什么也没留下</div>
                            </div>
                        </div>
                        <div className="btn-info">
                            <Button name={"关注"} />
                        </div>
                        <div className="collections-info">
                            <div className="collections-info-title">
                                <div className="title">最近收藏</div>
                                <div>{`查看更多>>`}</div>
                            </div>
                            <ul>
                                <li>
                                    <img src="/imgs/img_1.jpg" alt="" />
                                </li>
                                <li>
                                    <img src="/imgs/img_1.jpg" alt="" />
                                </li>
                                <li>
                                    <img src="/imgs/img_1.jpg" alt="" />
                                </li>
                                <li>
                                    <img src="/imgs/img_1.jpg" alt="" />
                                </li>
                                <li>
                                    <img src="/imgs/img_1.jpg" alt="" />
                                </li>
                                <li>
                                    <img src="/imgs/img_1.jpg" alt="" />
                                </li>
                                <li>
                                    <img src="/imgs/img_1.jpg" alt="" />
                                </li>
                                <li>
                                    <img src="/imgs/img_1.jpg" alt="" />
                                </li>
                                <li>
                                    <img src="/imgs/img_1.jpg" alt="" />
                                </li>
                            </ul>
                        </div>
                        <div className="download-info">
                            <div>素材下载</div>
                            <ul>
                                <li>1920px - 1080px</li>
                                <li>1920px - 1080px</li>
                                <li>1920px - 1080px</li>
                                <li>1920px - 1080px</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="message-list">
                    留言列表
                </div>
            </div>
        </div>
    )
}

export default ImgInfo;