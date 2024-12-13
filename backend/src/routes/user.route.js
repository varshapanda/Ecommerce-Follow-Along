const express = require('express');
// const createUser = require('../controllers/user.controller.js');
const upload = require('../middlewares/multer.js');
const {
    createUser,
    verifyUserController,
  } = require('../controllers/user.controller.js');
//   const jwt = require('jsonwebtoken');
  const router = express.Router();

// const router = express.Router();

router.post('/create-user', upload.single('file'), createUser);
router.get('/activation/:token', verifyUserController);

module.exports = router;