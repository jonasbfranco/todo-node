const express = require("express");
const todosRoutes = require("./todos.routes");
const dotenv = require('dotenv');

dotenv.config();

const app = express();

app.use(express.json());
app.use(todosRoutes);

app.get("/", (req, res) => {
    return res.json("Hello World");
});

app.get("/health", (req, res) => {
    return res.json("up");
});

app.listen(3333, () => console.log("Server up in 3333"));