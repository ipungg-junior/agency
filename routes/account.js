const express = require('express');
const router = express.Router();
const controller = require('../controller/authController');

// Homepage route   
router.get('/', (req, res) => 
{
    res.statusCode = 404;
    res.json(
    {
        status: 404,
        info: '404 Not Found'        
    });
});

// (GET) Register Page
router.get('/register', async (req, res) => 
{
    const state = await controller.checkSession(req, res);

    // Sesi tidak ada
    if (state===false){
        res.statusCode = 200;
        res.send('Register Page');
    }else{
        res.redirect('/');
    }
});

// (GET) Login page
router.get('/login', async (req, res) => 
{
    const state = await controller.checkSession(req, res);

    // Sesi tidak ada
    if (state===false){
        res.statusCode = 200;
        res.send('Login Page');
    }else{
        res.redirect('/');
    }
});




// (POST)   Login API (seharusnya dipindah ke route khusus API)
router.post('/login', async (req, res) => 
{

    const state = await controller.checkSession(req, res);
    // Sesi tidak ada
    if (state===false){

        //lanjut login dengan email
        const account = await controller.loginWithEmail(res ,req.query.email, req.query.password);
        if (account===false){
            res.statusCode = 404;
            res.json({
                status: 404,
                info: 'Account not found'
            });
        }else{
            req.session.sessionID = account.user.uid;
            res.statusCode = 200;
            res.json({
                status: 200,
                sessionID: account.user.uid
            });
        }    
    }else{
        res.redirect('/');
    }


});


router.post('/register', async (req, res) => {
    await controller.createAccount(res, req.query.password);
});



router.post('/logout', async (req, res) => {
    req.session.destroy((err) => {
        if (err){
            res.statusCode = 501;
            res.json({
                status: 501,
                info: 'Logout fail'
            });
        }
        res.statusCode = 200;
        res.json({
            status: 200,
            info: 'Success logout'
        });
    });
});

module.exports = router;