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

function filterData(target, conditionCallback) {
    let result = []
    target.forEach((value)=>{
        if (conditionCallback(value)) {
            result.push(value);
        }
    })
    return result
}

router.post("/", async (req, res) => {
    // const list = [];
    const { key, color, size, tags, grade } = req.body;
    const dataFile = path.join(__dirname, "../../data/HoneImgList.json");
    try {
        const data = await getData(dataFile);
        if (data.length === 0) {
            return res.status(404).json({ message: "没有找到匹配的数据" });
        }

        //key
        //color
        //size
        //tags
        let result = filterData(data, value => {
            return !key || value.name === key
        })
        result = filterData(result, value => {
            return !color || value.data.colors.indexOf(color) !== -1
        })
        result = filterData(result, value => {
            return !size || value.data.size === size
        })
        result = filterData(result, value => {
            return !tags || value.data.tags.indexOf(tags) !== -1
        })


        // if (key !== "") {
        //     data.forEach((value) => {
        //         if (value.name === key) {
        //             list.push(value);
        //         }
        //     });
        // }
        // if (color !== "") {
        //     data.forEach((value) => {
        //         if (value.data.colors.indexOf(color) !== -1) {
        //             list.push(value);
        //         }
        //     });
        // }
        // if (size !== "") {
        //     data.forEach((value) => {
        //         if (value.data.size === size) {
        //             list.push(value);
        //         }
        //     });
        // }
        // if (tags !== "") {
        //     data.forEach((value) => {
        //         if (value.data.tags.indexOf(tags) !== -1) {
        //             list.push(value);
        //         }
        //     });
        // }
        res.status(200).json(result);

    } catch (error) {
        res.status(500).json({ error: "无法读取数据" });
    }
});

module.exports = router;