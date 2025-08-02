const express = require("express");
const router = express.Router();
const {
  getInterns,
  createIntern,
  updateIntern,
} = require("../controllers/internController.js");

router.get("/", getInterns);
router.post("/", createIntern);
router.patch("/:id", updateIntern);

module.exports = router;
