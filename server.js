var express = require("express");
var hbs = require("hbs");
var path = require("path");
var methodOverride = require("method-override");
var session = require("express-session");
require("./utils/hbs");
require("./db");
var dotenv = require("dotenv")
dotenv.config()



// Routes of both API as well as normal

var userAPIRoutes = require("./routes/apiRoutes/userApiRoutes");
var userNormalRoutes = require("./routes/normalRoutes/userNormalRoutes");
var productRoutes = require("./routes/apiRoutes/productRoute");
var detailsRoutes = require("./routes/apiRoutes/getDetailsRoutes")

// Init
var app = express();

// Setting HBS as template engine
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views", "pages"));
app.set("view options", {
  layout: "layout"
});
const publicPath = path.join(__dirname, "statics");
app.use(express.static(publicPath));
// Registering hbs partials
hbs.registerPartials(path.join(__dirname, "views", "partials"));

// Having user form body parsed
app.use(
  express.urlencoded({
    extended: false
  })
);

// Adding custom request type override query key name
app.use(methodOverride("cadbury"));

// Adding the session capabilities
app.use(
  session({
    secret: "blogsAPIexpressappsecret",
    resave: false,
    name: "blogSession",
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 30,
      httpOnly: true,
      secure: false,
      sameSite: "strict"
    }
  })
);

app.use(userNormalRoutes);
app.use(userAPIRoutes);
app.use(productRoutes);
app.use(detailsRoutes)


app.get("/", function (req, res) {
  return res.render("index", {
    title: "Home page",
    userId: req.session.userId
  });
});
var PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
  console.log(`Server started on port ${PORT}`);
});