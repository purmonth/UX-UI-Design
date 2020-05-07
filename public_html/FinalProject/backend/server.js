// require packages
var express = require("express"),
    app = express(),
    //bodyParser = require("body-parser"),
    mongoose = require("mongoose"),
    passport =  require("passport"),
    session = require("express-session"),
    localStrategy = require("passport-local"),   // for username-pw based authentication
    methodOverride = require("method-override")
    
// databsase connection and require data schema
var config = require("./config")
const dbUrl = `mongodb://${config.mongodb.user}:${config.mongodb.password}@${config.mongodb.host}/${config.mongodb.database}`
mongoose.connect(dbUrl, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("Connect to Lazebra database!!")
}).catch(err => {
  console.log("Error: ", err.message)
})
mongoose.Promise = global.Promise
var User = require("./models/user")
  
// require routers
var usersRouter = require("./routes/users")
  
// variable difinitions 
const port = 3033   // listening port 

// basic configurations
app.use(cors())
app.use(express.json())
app.use(methodOverride("_method"))
//app.use(express.static(__dirname + "/public"))
//app.use(bodyParser.urlencoded({extended: false}))

// passport configurartions
app.use(session({
  secret: "Lazebra",
  resave: false,
  saveUninitialized: false
}))
app.use(passport.initialize())   // initialize passport
app.use(passport.session())   // use persistent login session
passport.use(new localStrategy(User.authenticate()))
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())
app.use((req, res, next) => {
  res.locals.currentUser = req.user;
  next();
})

// routing configurations
app.use("/users", usersRouter)

// server listening
app.listen(port, () => {
  console.log("Server listening on port: 3033")
})

