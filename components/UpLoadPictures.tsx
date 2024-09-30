/**
 * Home图片上传
 */
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "../styles/UpLoadPictures.css";
import Button from "../components/Button"

interface UpLoadPicturesProps {};

const UpLoadPictures: React.FC<UpLoadPicturesProps> = ({  }) => {
    const btnNames = "上传你的图片";
    useEffect(() => { }, []);
    return (
        <div className="upload-pictures">
                <div className="title">加入233图库</div>
                <div className="subtitle">下载高质量的ACG图片，分享你自己的图片给世界各地的人。</div>
                <Button name={btnNames} />
            </div>
    );
};

export default UpLoadPictures;