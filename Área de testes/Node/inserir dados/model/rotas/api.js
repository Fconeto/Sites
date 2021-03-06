const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const posts = require("../model/posts");
const router = express.Router();

router.use(cors());

router.get("/all", (req, res) => {
    res.json(JSON.stringify(posts.getAll()));
})

router.post("/new",bodyParser.json(), (req, res) => {
    
    let title = req.body.title;
    let description = req.body.description;

    posts.newPost(title, description);
    
    res.send("Post adicionado");
    

})

router.post("/del",bodyParser.json(), (req, res) => {
    
    let title = req.body.title;
    let description = req.body.description;

    posts.deletePost(title, description);

    res.send("Post apagado");
})

module.exports = router;