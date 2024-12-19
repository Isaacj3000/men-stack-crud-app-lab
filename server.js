
require('dotenv').config();
// We begin by loading Express
const express = require('express');
const morgan = require('morgan');
const methodOverride = require('method-override');
const app = express();
const path = require('path');

// ==================
// CONFIGURE MONGOOSE
// ==================
require('./configs/database');

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Middleware
app.use(morgan('dev')); // Enable logging
app.use(methodOverride('_method')); // Support method override
app.use(express.static(path.join(__dirname, 'public'))); // Serve static files

// GET /
app.get("/", async (req, res) => {
    res.render("index.ejs");
});

app.get("/cars/", async (req, res) => {
    res.render("new.ejs");
});

app.get("/cars/new", async (req, res) =>{
    res.render("")
})

// Error handling middleware (optional)
// app.use((err, req, res, next) => {
//     console.error(err.stack);
//     res.status(500).send('Something broke!');
// });

app.listen(process.env.PORT, () => {
    console.log(`🎧 Server is running on http://localhost:${process.env.PORT}`);
});