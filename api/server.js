/**
 * Express
 */
const express = require("express");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

// import router
const imgsRouter = require("./routers/imgsRouter");
const inputRouter = require("./routers/inputRouter");

const startServer = async () => {
    await app.prepare();
    const open = (await import('open')).default;
    const server = express();
    const PORT = process.env.PORT || 3000;

    //API router
    server.use("/api/imgsRouter", imgsRouter);
    server.use("/api/inputRouter", inputRouter);

    //Next router
    server.all("*", (req, res) => {
        return handle(req, res);
    });

    //err
    server.listen(PORT, (err) => {
        if (err) {
            throw err;
        }
        console.log(`> Ready on http://localhost:${PORT}`);
    });

    //open browser
    open(`http://localhost:${PORT}`);
};

startServer().catch((err) => {
    console.error(err);
});