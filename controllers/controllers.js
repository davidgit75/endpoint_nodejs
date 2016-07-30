var home = require("./home");

exports.app = {
    get_home: function(req, res){home.get(req, res);},
    post_home: function(req, res){home.post(req, res);},
    add_user: function(req, res){home.add_user(req, res);}
};