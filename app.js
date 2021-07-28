const express = require("express");
const dotenv = require("dotenv");
const expressLayouts = require("express-ejs-layouts");
const path = require("path");
// const mongoose          = require('mongoose');
const app = express();
const PORT = process.env.PORT || 3000;

// dotenv init
dotenv.config();

// import routes
const defaultRouter = require("./src/routes/default");

// path
const __public = path.join(__dirname, "dist");
const __src = path.join(__dirname, "src");
const __templates = path.join(__src, "templates");

// app config
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(expressLayouts);

// set template engine
app.set("view engine", "ejs");
app.set("views", __templates);
app.set("layout", "layout/_default");

// set static files
app.use("/css", express.static(path.join(__public, "/css")));
app.use("/js", express.static(path.join(__public, "/js")));
app.use("/img", express.static(path.join(__public, "/img")));
app.use("/files", express.static(path.join(__public, "/files")));
// app.use('/bootstrap/css', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/css')));
// app.use('/bootstrap/js', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/js')));
// app.use('/jq', express.static(path.join(__dirname, '/node_modules/jquery/dist')));
app.use("/fonts", express.static(path.join(__public, "/fonts")));
// app.use('/fontsvg', express.static(path.join(__public, '/www/fontsvg')));

// // Load routes
// app.use('/admin', adminRouter);
// app.use(ordersRouter);
// app.use(authRouter);
app.use(defaultRouter);

app.listen(PORT, () => console.log(`Listening on port: http://localhost:${PORT}`));
