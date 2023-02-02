const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const User = require("../models/User");
const { body, validationResult } = require("express-validator");

// Authenticate user registraion
router.post(
  "/",

  body("username").isLength({ min: 4 }),
  body("email").isEmail(),
  body("password").isLength({ min: 6 }),
  async (req, res, next) => {
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const salt = await bcrypt.genSalt(10);
      const genPassword = await bcrypt.hash(req.body.password, salt);

      const data = {
        username: req.body.username,
        email: req.body.email,
        password: genPassword,
      };

      let user = await User.findOne({ email: data.email });
      if (user) {
        return res
          .status(400)
          .json({ errors: "Sorry this user already exists." });
      }
      user = User(data);

      user.save();

      res.send(user);
      console.log(user);
    } catch (error) {
      console.log("opps! Error: " + error.message);
    }
  }
);

module.exports = router;
