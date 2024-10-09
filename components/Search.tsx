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
import { Lists } from './interface/Lists';
import { setFilterState } from '../store/filters';
import { apiGetImages } from "../utils/apiGetImages";

interface SearchProps {
    setImgListData: (data: Lists[]) => void;
};

const Search: React.FC<SearchProps> = ({ setImgListData }) => {
    const dispatch = useDispatch();
    const language = useSelector((state: RootState) => state.language);
    const tags = Tags.homeTags;
    const [isVisible, setIsVisible] = useState(true);
    const [isInputValue, setIsInputValue] = useState("");
    const getFiltersValue = useSelector((state: RootState) => state.filters);

    const onHandleFocus = () => { setIsVisible(false) };
    const onHandleBlur = () => {
        if (isInputValue.trim() === "") {
            setIsVisible(true);
        }
    };
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIsInputValue(event.target.value)
        dispatch(setFilterState({ key: "key", value: event.target.value }));
    };

    //检索符合条件的图片列表
    const inputSubmit = async (event?: React.FormEvent<HTMLFormElement>) => {
        if (event) event.preventDefault();
        if (isInputValue.trim() !== "") {
            const response = await apiGetImages("/api/inputRouter", getFiltersValue);
            response.error ? alert(response.error) : setImgListData(response);
        }
    };

    //监听input并触发防抖输入
    useEffect(() => {
        const handler = setTimeout(() => {
            inputSubmit();
        }, 1000);
        return () => { clearTimeout(handler); }
    }, [isInputValue])

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