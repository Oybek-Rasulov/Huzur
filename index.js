import express from "express";
import { dirname } from "path";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.get("/ru", (req, res) => {
    res.render("index.ejs");
});

app.get("/uz", (req, res) => {
    res.render("uzb.ejs");
})


app.listen(port, () => {
    console.log(`Server running on port http://localhost:${port}`);
});

