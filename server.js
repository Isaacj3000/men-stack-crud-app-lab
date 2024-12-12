require('dotenv').config()
// We begin by loading Express
const express = require('express');
const morgan = require('morgan');
const methodOverride =require('method-override');
const app = express();
const path = require('path');


// ==================
// CONFIGURE MONGOOSE
// ==================

require('./configs/database');

// GET /
app.get("/", async(req, res) => {
    res.render("index.ejs");
})




app.listen(3000, () => {
    console.log('listening on port 3000');
})