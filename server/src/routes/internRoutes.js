const express = require("express");
const router = express.Router();
const {
  getInterns,
  createIntern,
  updateIntern,
  deleteIntern,
} = require("../controllers/internController.js");

router.get("/", getInterns);
router.post("/", createIntern);
router.patch("/:id", updateIntern);
router.delete("/:id", deleteIntern);

module.exports = router;
