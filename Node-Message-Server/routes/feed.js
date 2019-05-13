const express = require('express');
const feedController = require('../controller/feed');

const router = express.Router();

// Get /feed/feeds
router.get('/feeds', feedController.getFeeds);

//post feeds 
router.post('/feed', feedController.createFeed);




module.exports = router;