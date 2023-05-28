const express = require("express");

const router = express.Router();


// controllers
const { register } = require("../controllers/auth.js");

router.post("/register", register);



module.exports = router;
