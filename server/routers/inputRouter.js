/**
 * Home search input submit
 * 
 */

const { strict } = require("assert");
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

function activeShapes(size) {
    if (size.length > 0) {
        const width = size[0];
        const height = size[1];
        switch (true) {
            case width > height:
                return "横图";
            case width < height:
                return "竖图";
            case width === height:
                return "正方形";
            default:
                break;
        };
    } else {
        return "";
    }
};


function filterData(target, conditionCallback) {
    let result = [];
    target.forEach((value) => {
        if (conditionCallback(value)) {
            result.push(value);
        }
    });
    return result;
};

router.post("/", async (req, res) => {
    const { key, color, size, tags, grade } = req.body;
    const dataFile = path.join(__dirname, "../../data/HoneImgList.json");
    try {
        const data = await getData(dataFile);
        if (data.length === 0) {
            return res.status(404).json({ message: "没有找到匹配的数据" });
        }

        /**
         * key:检索框
         * color:颜色过滤器
         * size:形状过滤器
         * tags:标签过滤器
         */

        let result = filterData(data, value => {
            return !key || value.name === key
        });
        result = filterData(result, value => {
            return !color || value.data.colors.indexOf(color) !== -1
        });
        result = filterData(result, value => {
            const shape = activeShapes(value.data.size);
            return !size || shape === size;
        });
        result = filterData(result, value => {
            return !tags || value.data.tags.indexOf(tags) !== -1
        });
        res.status(200).json(result);

    } catch (error) {
        res.status(500).json({ error: "无法读取数据" });
    }
});

module.exports = router;