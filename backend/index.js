const express = require('express');
const app = express();
const port = 3000;
const cors = require("cors");
const pool = require('./model/db');

app.use(cors());
const createTable = require('./model/model');
createTable();

const gameController = require("./controllers/gameController");
app.use("/game", gameController);

app.listen(port, () => {
    console.log(`Running at http://localhost:${port}`);
})