// require necessary packages
var mongoose = require("mongoose"),
    passportLocalMongoose = require("passport-local-mongoose")

// define user schema
var userSchema = new mongoose.Schema({
  email: String,
  password: String,
  username: String
})

// add all the methods into schema
userSchema.plugin(passportLocalMongoose)

// export module
module.exports = mongoose.model("User", userSchema)
