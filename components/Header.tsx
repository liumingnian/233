/**
 * 首页组件
 */
import '../styles/Header.css';

interface HeaderProps {
    // left: string[];
    // right: string[];
}
const Header: React.FC<HeaderProps> = ({ }) => {
    const menuList = {
        left: ["/next.svg", "首页", "推荐", "每周排行", "图组专辑"],
        right: ["上传", "登录"],
    };
    function navMenuSpacing(i: number, direction: string, max: number) {
        if (i != 0 && direction == "left") return "active";
        if (i == 0 && direction == "left") return "active-img";
        if (i < (max - 1) && direction == "right") return "active";
        return;
    }
    return (
        <header>
            <div className="nav">
                <ul className="nav-left">
                    {menuList.left.map((link, index) => (
                        <li className={navMenuSpacing(index, "left", menuList.left.length)} key={index}>
                            {link.endsWith(".svg") ? (
                                <img src={link} alt={``} />
                            ) : (
                                link
                            )}
                        </li>
                    ))}
                </ul>
                <ul className="nav-right">
                    {menuList.right.map((link, index) => (
                        <li className={navMenuSpacing(index, "right", menuList.right.length)} key={index}>{link}</li>
                    ))}
                </ul>
            </div>
        </header>
    )
};
export default Header;
