const express = require ("express");
const app = express();
const port = 3000;

app.get ("/", (req, res) => {
    // res.send ("<h1>Hello Raj Ratan</h1>");
    res.status(200).send("Hello Raj Ratan");
})

app.get ("/insta", (req, res) => {
    const insta = {
        id: "raj_ratan04",
        follower: 20,
        follow : 10
    }

    res.status(200).json({insta})
})

app.get("/ac/twitter", (req, res) => {
    const twitter = {
        userName : "raj_ratan04",
        followers : 34,
        follows : 55,
    };
    res.status(200).json({ twitter })
})

app.get("/api/user/:token", (req, res) => {
    console.log(req.params.token);
    res.status(200).json({ param: req.params.token})
})




app.listen (port, () => {
    console.log("Server is running");
})