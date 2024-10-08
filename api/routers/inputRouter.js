/**
 * Home search input submit
 * 
 */

const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

const getData = (value) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            fs.readFile(value, "utf-8", (err, data) => {
                if (err) return reject("无法读取 JSON 文件");
                resolve(JSON.parse(data));
            });
        }, "");
    });
};

router.post("/", async (req, res) => {
    const { searchInputKey } = req.body;
    const dataFile = path.join(__dirname, "../../data/HoneImgList.json");
    const list = [];
    try {
        const data = await getData(dataFile);
        if (data.length === 0) {
            return res.status(404).json({ message: "没有找到匹配的数据" });
        }
        data.forEach((value) => {
            if (value.name === searchInputKey) {
                list.push(value);
            }
        });
        res.status(200).json(list);
    } catch (error) {
        res.status(500).json({ error: "无法读取数据" });
    }
});

module.exports = router;