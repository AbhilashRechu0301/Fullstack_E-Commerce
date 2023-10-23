var UserModel = require("../model/Users");
//var bcrypt = require("bcryptjs");
//var Email = require('../utils/email');

exports.addUser = async function (req, res) {
  console.log(req.body);
  var user = req.body;
  console.log("user", user);
  //user.password = bcrypt.hashSync(req.body.password);
  var UserModelObject = new UserModel(user);
  
  try {
    var response = await UserModelObject.save(user);
    console.log(response);
    if (response instanceof Error) {
      res.status(500).send({
        statusCode: 500,
        message: "Registration failure"
      })
    } else {
     // Email.sendEmail(user.emailId)
      res.status(201).send({
        statusCode: 201,
        message: "Registration Successful"
      })
    }
  } catch (error) {
    console.log(error);
  }
}

exports.login = async function (req, res) {
  var username = req.body.username;
  var password = req.body.password;
  var response = await UserModel.findOne({ "username": username });

  if (response == null) {
    return res.status(401).send({
      statusCode: 401,
      message: "User Not Found"
    })
  }
  //else{
  //   return res.status(201).send({
  //      statusCode: 201,
  //       message: "User found"
  //   })
  // }

  if ("password" in response) {
    var result = bcrypt.compareSync(password, response.password);
    if (result) {
      res.status(200).send({
        statusCode: 200,
        message: "Login Success"
      })
    } else {
      res.status(401).send({
        statusCode: 401,
        message: "password incorrect"
      })
    }
  }
};

exports.getAllUsers = async function (req, res) {
  var response = await UserModel.find();
  console.log(response);
  res.send(response);
};

exports.updateUsers = async function (req, res) {
  var _id = req.params.id;
  var body = req.body;
  var response = await UserModel.findOneAndUpdate({ _id: _id }, body);
  console.log(response);
  res.send(response);
};

exports.deleteUsers = async function (req, res) {
  var _id = req.params.id;
  var response = await UserModel.findOneAndDelete({ _id: _id });
  console.log(response);
  res.send(response);
};

/*var response = await UserModelObject.save(user);
  console.log(response);
  res.send(response);
}*/