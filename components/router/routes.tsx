import Home from "../../pages/index";
import Recommended from "../../pages/Recommended";
import Ranking from "../../pages/Ranking";
import Collection from "../../pages/Collection";
import UpLoad from "../../pages/UpLoad";
import Login from "../../pages/Login";

export interface IRoute {
    name: string;
    path: string;
    component: React.FC;
};

export const navRoutes: Record<string, IRoute> = {
    logo: {
        name: "/next.svg",
        path: '/',
        component: Home,
    },
    home: {
        name: "首页",
        path: '/',
        component: Home,
    },
    recommended: {
        name: "推荐",
        path: '/Recommended',
        component: Recommended,
    },
    ranking: {
        name: "每周排行",
        path: '/Ranking',
        component: Ranking,
    },
    collection: {
        name: "图片合集",
        path: '/Collection',
        component: Collection,
    },
};

export const upAndLoginRoutes: Record<string, IRoute> = {
    upLoad: {
        name: "上传",
        path: '/UpLoad',
        component: UpLoad,
    },
    login: {
        name: "登录",
        path: '/Login',
        component: Login,
    }
}
