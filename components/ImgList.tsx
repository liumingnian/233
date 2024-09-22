/**
 * 首页过滤器组件
 */
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from '../store';
import "../styles/ImgList.css";

interface ImgListProps {};
interface Lists {
    name:string,
    data:object,
};

const lists:Lists[]=[
    {
        name:"",
        data:{
            user:"",
            state:"",
            size:"",
            messagesNumber:"",
            colors:[],
            tags:[],
        },
    },{
        name:"",
        data:{
            user:"",
            state:"",
            size:"",
            messagesNumber:"",
            colors:[],
            tags:[],
        },
    }
];

const ImgList: React.FC<ImgListProps> = ({ }) => {
    useEffect(() => { }, []);
    return (
        <div className="img-lists">

        </div>
    );
};

export default ImgList;