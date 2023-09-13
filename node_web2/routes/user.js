const express = require('express'); 
const router = express.Router();

// GET /user 라우터 
router.get('/', (req, res) => {
    res.send('Hello, User'); });

router.get('/test', (req, res) => {
    res.send('Hello, test'); });

module.exports = router;