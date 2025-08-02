const Intern = require("../../src/models/intern.js");

exports.getInterns = async (req, res) => {
  try {
    const interns = await Intern.find();
    res.json(interns);
  } catch (err) {
    res.status(500).json({ error: "Server Error" });
  }
};

exports.createIntern = async (req, res) => {
  try {
    const newIntern = await Intern.create(req.body);
    res.status(201).json(newIntern);
  } catch (err) {
    res.status(400).json({ error: "Invalid data" });
  }
};

exports.updateIntern = async (req, res) => {
  try {
    const intern = await Intern.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!intern) return res.status(404).json({ error: "Intern not found" });
    res.json(intern);
  } catch (err) {
    res.status(400).json({ error: "Update failed" });
  }
};
