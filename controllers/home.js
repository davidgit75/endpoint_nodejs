//var users = require("../models/users");

exports.get = function(req, res){
    res.render("home");
};

exports.post = function(req, res){
    console.log("POST");
    console.log(req.body);
    //if(req.body["get_users"]=="ok"){
        var object_to_serve = [
            {
                "id": "0",
                "username": "david",
                "nickname": "david75",
                "password": "davidpass"
            },
            {
                "id": "1",
                "username": "david",
                "nickname": "david75",
                "password": "davidpass"
            },
            {
                "id": "2",
                "username": "david",
                "nickname": "david75",
                "password": "davidpass"
            }
        ];

        res.send(object_to_serve);
        
        /*users.find({}, function(err, us){
            console.log(us);
            res.send(us);
        });*/
    /*}else{
        res.send({ans: "error"});
    }*/
};

/*exports.add_user = function(req, res){
    console.log("NEW USER");
    console.log(req.body);
    var new_user = new users({
        name: req.body.name,
        age: parseInt(req.body.age),
        email: req.body.email
    });
    new_user.save(function(err){
        if(!err) console.log("New user added");
        else console.log("Error saving new user: " + err);
    });
};*/