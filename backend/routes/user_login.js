const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const User = require("../models/User");
const { body, validationResult } = require("express-validator");

// Authenticate user login
router.post(
  "/",

  body("email").isEmail(),
  body("password").exists(),
  async (req, res, next) => {
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const { email, password } = req.body;

      let user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ errors: "Invalid credential." });
      }

      const checkPassword = await bcrypt.compare(password, user.password);

      if (!checkPassword) {
        return res.status(400).json({ errors: "Invalid credential." });
      }

      res.send(user._id);
    } catch (error) {
      console.log("opps! Error: " + error.message);
    }
  }
);

module.exports = router;
