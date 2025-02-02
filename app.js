var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const dotenv = require('dotenv');
dotenv.config();
const dbConfig = require("./configs/db.config");
const mongoose = require('mongoose');
const swagger = require('./configs/swagger.config')


// =======Database connections done here========
mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.url, {
}).then(() => {
  console.log("Databse Connected Successfully!!");    
}).catch(err => {
  console.log('Could not connect to the database', err);
  process.exit();
});
// =======Database connection ends here=======

var indexRouter = require("./routes/app.route");
var usersRouter = require("./routes/user.route");
var authRouter = require("./routes/auth.route");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/api", indexRouter);
app.use("/api/auth", authRouter);
app.use("/api/users", usersRouter);


swagger(app) 

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});


// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

const port = process.env.PORT || 7500;
app.listen(port, '0.0.0.0', () => {
  console.log(`Server is running on port ${port}`);
});



module.exports = app;
