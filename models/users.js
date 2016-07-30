var mongoose = require("mongoose");
var Schema = mongoose.Schema

var usersSchema = new Schema({
    name: String,
    email: String,
    age: Number
});

module.exports = mongoose.model("Users", usersSchema);