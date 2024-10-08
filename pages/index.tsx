import Header from "../components/Header"
import ToTopButton from "../components/ToTopButton"
import Search from "../components/Search"
import Filters from "../components/Filters"
import ImgList from "../components/ImgList"
import UpLoadPictures from "../components/UpLoadPictures"
import Footer from "../components/Footer"
import React, { useState, useEffect } from "react";
import { Lists } from "../components/interface/Lists";
import "../styles/globals.css"
/**
 * 
 * @returns index为默认路由文件
 */
export default function Home() {
  const [imgListData, setImgListData] = useState<Lists[]>([]);
  return (
    <main className="main-box">
      <Header />
      <ToTopButton />
      <Search setImgListData={setImgListData} />
      <Filters />
      <ImgList imgListData={imgListData} />
      <UpLoadPictures />
      <Footer />
    </main>
  );
}
