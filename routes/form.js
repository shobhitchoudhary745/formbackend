const express = require("express");
const router = new express.Router();
const {
  createForm,
  getForm,
} = require("../controller/formController");

router.post("/forms", createForm);
router.get("/getForm", getForm);

module.exports = router;
