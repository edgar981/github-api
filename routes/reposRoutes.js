const express = require('express');
const reposController = require('../controllers/reposController');

const router = express.Router();

router.route('/googleTopRepos').get(reposController.getGoogleTopRepos);

module.exports = router;