import Header from "../components/Header"
import ToTopButton from "../components/ToTopButton"
import Search from "../components/Search"
import Filters from "../components/Filters"
import ImgList from "../components/ImgList"
import UpLoadPictures from "../components/UpLoadPictures"
import Footer from "../components/Footer"
import "../styles/globals.css"
/**
 * 
 * @returns index为默认路由文件
 */
export default function Home() {
  return (
    <main className="main-box">
      <Header />
      <ToTopButton />
      <Search />
      <Filters />
      <ImgList />
      <UpLoadPictures />
      <Footer />
    </main>
  );
}
