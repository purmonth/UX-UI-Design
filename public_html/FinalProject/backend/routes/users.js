// require packages
var express = require("express"),
    router = express.Router(),
    passport = require("passport"),
    FacebookPassport = require("../config/passportFB"),
    User = require("../models/user.model");

// post route "/register", user sign up logic implementation
router.post("/register", (req, res) => {
  User.register(new User({email: req.body.email, username: req.body.username, phonenumber: req.body.phonenumber}), req.body.password, (err, user) => {
    if(err) {
      console.log(err)
      return res.render("/")   // short circuit, get out of entire callback using return
    }
    passport.authenticate("local")(req, res, () => {   // register success, direct to ? route
      res.redirect("/login")
    })
  })
})

// post route "/login", user login logic implementation
// app.post("/login", middelware, callback)
router.post("/login", passport.authenticate("local", {
  successRedirect: "/",   // success, redirect to ? route
  failureRedirect: "/"   // fail, redirect to home page
}), (req, res) => {
  console.log("Login with username-password auth!!")
})

// authorization request in order to get auth grant
router.get("/auth/facebook", FacebookPassport.authenticate("facebook"))

router.get("auth/facebook/callback", FacebookPassport.authenticate("facebook", {
  successRdirect: "/",
  failureReidrect: "/login"
}), (req, res) => {
  console.log("Login with FB auth!!")
})

// get route "/logout", user logout logic implementation
router.get("/logout", (req, res) => {
  req.logout()
  res.redirect("login")
})

// export router
module.exports = router


// get route "/login", show the login form
/*router.get("/login", (req, res) => {
  res.render("login")
})*/

// root route "/", landing page
/*router.get("/", (req, res) => {
  res.send("Login success using FB auth!")
})*/

// authentication routes
// get route "/register", show the form of registration
/*router.get("/register", (req, res) => {
  res.render("register")
})*/
