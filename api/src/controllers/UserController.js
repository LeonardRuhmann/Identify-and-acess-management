const User = require("../model/User.js");

exports.getUser = async (req, res) => {
  try {
    const getUser = await User.find();
    return res.send(getUser);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

exports.createUser = async (req, res) => {
  try {
    const user = new User({
      user: req.body.user,
      password: req.body.password,
    });
    await user.save();
    return res.status(200).json("User created successfully");
  } catch (error) {
    return res
      .status(500)
      .send({ message: error.message + "Ops, algo deu errado aqui." });
  }
};
