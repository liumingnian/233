/**
 * 首页搜索组件
 */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { RootState } from '../store';
import "../styles/Search.css";
import { MultilingualText } from "../utils/MultilingualText";
import { ImgData } from "../data/imgList";
import { Tags } from "../utils/Tags";

interface SearchProps {
    setImgListData: any;
};

const Search: React.FC<SearchProps> = ({ setImgListData }) => {
    const language = useSelector((state: RootState) => state.language);
    const tags = Tags.homeTags;
    const [isVisible, setIsVisible] = useState(true);
    const [isInputValue, setIsInputValue] = useState("");

    useEffect(() => { }, []);

    const onHandleFocus = () => { setIsVisible(false); };
    const onHandleBlur = () => {
        setIsVisible(true);
        setIsInputValue("");
    };
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIsInputValue(event.target.value)
    };

    const inputSubmit = async (event: any) => {
        event.preventDefault();
        const response = await fetch("/api/inputRouter", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ searchInputKey: isInputValue }),
        });
        const data = await response.json();
        setImgListData(data);
    };

    return (
        <div className="search-box">
            <div className="describe">
                <div className='search-title'>
                    {MultilingualText.title[language]}
                </div>
                <div className='search-subtitle'>
                    {MultilingualText.subTitle[language].replaceAll(" ", ImgData.imgs.length.toString())}
                </div>
                <div className="search-input">
                    <div className='input-box'>
                        <div className='input-describe'
                            style={{ display: isVisible ? "flex" : "none" }}>
                            <img src="/icon/seatch.svg" alt="Search Icon" />
                            <p>{MultilingualText.searchInput[language]}</p>
                        </div>
                        <form onSubmit={inputSubmit} action="">
                            <input type=""
                                id="searchInputKey"
                                value={isInputValue}
                                onChange={handleChange}
                                onFocus={onHandleFocus}
                                onBlur={onHandleBlur} />
                        </form>
                    </div>
                </div>
                <ul>
                    <li>{MultilingualText.tagsTitle[language]}</li>
                    {tags.map((tag, index) => (
                        <li className='tags' key={index}>
                            {(tag.length != index) ? (tag + ",") : (tag)}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="bg-img">
                <img src={ImgData.searchBgImg} alt="" />
            </div>
        </div>
    );
};

export default Search;