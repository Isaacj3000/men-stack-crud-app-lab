// We begin by loading Express
const express = require('express')


const app = express();

// GET /
app.get("/", async(req, res) => {
    res.render("index.ejs");
})




app.listen(3000, () => {
    console.log('listening on port 3000');
})