import Header from "../components/Header"
import Search from "../components/Search"
import Filters from "../components/Filters"
import ImgList from "../components/ImgList"
import "../styles/globals.css"
/**
 * 
 * @returns index为默认路由文件
 */
export default function Home() {
  return (
    <main className="main-box">
      <Header />
      <Search />
      <Filters />
      <ImgList />
      <div className="footer"></div>
    </main>
  );
}
