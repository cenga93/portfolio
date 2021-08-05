const express = require("express");
const dotenv = require("dotenv");
const expressLayouts = require("express-ejs-layouts");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;
const breadcrumb = require('express-url-breadcrumb');
const connection = require("./src/config/database");

// Dotenv init
dotenv.config({path: "./config.env"});

//database connection
connection();

// use for every request
app.use(breadcrumb(function (item, index) {
    // convert each breadcrumb label to upper case
    // item.label = item.label.toUpperCase();
}));

// Import routes
const defaultRouter = require("./src/routes/default");

// Path
const __public = path.join(__dirname, "dist");
const __src = path.join(__dirname, "src");
const __templates = path.join(__src, "templates");

// App config
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(expressLayouts);

// Set template engine
app.set("view engine", "ejs");
app.set("views", __templates);
app.set("layout", "layout/_default");

// Set static files
app.use("/css", express.static(path.join(__public, "/css")));
app.use("/js", express.static(path.join(__public, "/js")));
app.use("/img", express.static(path.join(__public, "/img")));
app.use("/files", express.static(path.join(__public, "/files")));
app.use("/fonts", express.static(path.join(__public, "/fonts")));

// Load routes
app.use(defaultRouter);

// Start server
app.listen(PORT, () => console.log(`Listening on port: http://localhost:${PORT}`));
