const express = require('express');
const router = express.Router();

// (GET) Homepage Web html
router.get('/', (req, res) => {
    res.render('pages/index', {
        page_title: 'Company',
        page_name: 'Company Name'
    });
});


router.post('/', (req, res) => {
    res.statusCode = 403;
    res.json
    (
        {
            status: 403,
            info: 'Forbiden'
        }
    );
});

module.exports = router