/**
 *图片获取
 */

const router = require("express").Router();
const fs = require("fs");
const path = require("path");

const getData = (value) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            fs.readFile(value, "utf-8", (err, data) => {
                if (err) return reject("无法读取 JSON 文件");
                resolve(JSON.parse(data));
            });
        }, 100)
    });
};

router.get('/', async (req, res) => {
    const dataFile = path.join(__dirname, "../../data/HoneImgList.json");
    try {
        const data = await getData(dataFile);
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: "无法读取数据" });
    }
});

module.exports = router;