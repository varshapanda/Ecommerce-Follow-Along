const express = require("express");
const multer = require("multer");
// const upload = require('../middlewares/multer.js');
const {
  createUser,
  verifyUserController,
  signup,
  login,
} = require("../controllers/user.controller.js");
const jwt = require("jsonwebtoken");
const upload = multer({ dest: "temp-uploads/" });
const router = express.Router();

router.post("/create-user", upload.single("file"), createUser);
router.get("/activation/:token", verifyUserController);

router.post("/signup", upload.single("file"), signup);
router.post("/login", login);
module.exports = router;
