const { ToDo } = require("../model/Schemas");

exports.getTodosByUserId = async (req, res) => {
  try {
    const userId = req.params.userId;

    const AllToDos = await ToDo.find({ userId: userId });
    if (!AllToDos || AllToDos.length === 0) {
      return res.status(404).json({ error: "Without ToDos" });
    }
    res.status(200).json(AllToDos);
  } catch (error) {
    res.status(500).json({ error: error.toString() });
  }
};

exports.createToDo = async (req, res) => {
  try {
    const newToDo = new ToDo({
      userId: req.body.userId,
      title: req.body.title,
      description: req.body.description,
      date: new Date(),
      finished: req.body.finished,
    });

    const saveToDo = await newToDo.save();

    res.status(200).json(saveToDo);
  } catch (error) {
    res.status(500).json({ error: error.toString() });
  }
};

exports.updateToDo = async (req, res) => {
  try {
    const upadatedToDo = await ToDo.findByIdAndUpdate(
      req.params.id,
      {
        title: req.body.title,
        description: req.body.description,
        finished: req.body.finished,
      },
      {
        new: true,
      }
    );
    if (!upadatedToDo) {
      return res.status(404).json({ error: "ToDo not found" });
    }
    res.status(200).json(upadatedToDo);
  } catch (error) {
    res.status(500).json({ error: error.toString() });
  }
};

exports.deleteToDo = async (req, res) => {
  try {
    const deletedToDo = await ToDo.findByIdAndDelete(req.params.id);
    if (!deletedToDo) {
      res.status(404).json({ error: "ToDo not found" });
    }
    res.status(200).json({ message: "ToDo deleted sucessfully" });
  } catch (error) {
    res.stauts(500).json({ error: error.toString() });
  }
};
