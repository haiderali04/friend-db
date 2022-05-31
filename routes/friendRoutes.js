const express = require('express');
const friendController = require("../controllers/friendController");
const router = express.Router();

console.log('ddd')
router
  .route('/')
  .get(friendController.getAllFriends)
  .post(friendController.createFriend);
  

  router
  .route('/:id')
  .get(friendController.getOneFriend)
  .patch(friendController.updateOneFriend)
  .delete(friendController.deleteOneFriend);


module.exports = router;