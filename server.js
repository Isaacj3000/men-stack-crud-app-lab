
require('dotenv').config();
// We begin by loading Express
const express = require('express');
const morgan = require('morgan');
const methodOverride = require('method-override');
const app = express();
const path = require('path');
const session = require('express-session')
const { connect } = require('http2');
const { mongo } = require('mongoose');
const MongoConnect = require('connect-mongo')

// ==================
// CONFIGURE MONGOOSE
// ==================
require('./configs/database');



// +++++++++++++++++
// Middleware
// +++++++++++++++++


app.use(morgan('dev')); // Enable logging
app.use(express.urlencoded({ extended: false}))
app.use(express.json())
app.use(methodOverride('_method')); // Support method override
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    store: MongoConnect.create({
        mongoUrl: process.env.MONGODB_URI
    }),
    cookie: { secure: process.env.NODE_ENV === 'Production', httpOnly: true}
}));

// set EJS as the view engine

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
// // GET /
// app.get("/", async (req, res) => {
//     res.render("index.ejs");
// });

// Seed Route
app.use("/", require('./routes/seed.js'));

// Auth Route 
app.use('/', require('./routes/auth.js'))

// Home Route
app.use("/", require('./routes/home.js'));

// Car Route
app.use('/', require('./routes/cars.js'));




// Error handling middleware (optional)
// app.use((err, req, res, next) => {
//     console.error(err.stack);
//     res.status(500).send('Something broke!');
// });

app.listen(process.env.PORT, () => {
    console.log(`🎧 Server is running on http://localhost:${process.env.PORT}`);
});