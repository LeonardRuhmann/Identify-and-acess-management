const { User } = require("../model/Schemas.js");

exports.getUser = async (req, res) => {
  try {
    const getUser = await User.find();
    res.status(200).json(getUser);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

exports.createUser = async (req, res) => {
  try {
    const newUser = new User({
      image: req.file.buffer.toString("base64"),
      user: req.body.user,
      password: req.body.password,
      office: req.body.office,
      group: req.body.group,
      birthday: req.body.birthday,
    });
    await newUser.save();
    return res.status(200).json(newUser);
  } catch (error) {
    return res.status(500).send({ error: error.toString() });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if (!deletedUser) {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(200).send(`the ${deletedUser.user} was deleted`);
  } catch (error) {
    res.status(500).json({ error: error.toString() });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        user: req.body.user,
        password: req.body.password,
        office: req.body.office,
        group: req.body.group,
        birthday: req.body.birthday,
      },
      { new: true }
    );
    if (!updatedUser) {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: error.toString() });
  }
};
