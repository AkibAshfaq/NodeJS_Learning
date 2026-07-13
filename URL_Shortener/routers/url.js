const express = require('express');
const router = express.Router();
const { handleGetAllurl, handleGenShortURL, handleGeturl, handleDelete } = require('../controllers/url');

router.get('/allurl', handleGetAllurl)
router.get('/:shortId', handleGeturl);

router.post('/', handleGenShortURL);

router.delete('/:shortId', handleDelete);

module.exports = router;