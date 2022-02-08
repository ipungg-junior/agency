//import all auth utils
const firebase = require('../utils/firebaseAuth');
const database = require('./dbController');

/**
 * Function login dengan email dan password
 * @param {*} res 
 * @param {*} mail 
 * @param {*} pass
 * @returns 
 * return akun user jika berhasil,
 * (false) apabila gagal.
 */
const loginWithEmail = async (res, mail, pass) => {
    var account = await firebase.loginEmail(mail, pass);
    if (account===false)
    {
        return false;
    }
    else
    {
        database.writeUserLogin(account.id);
        return account;
    }
}


/**
 * Function untuk mengecek sesi.
 * @param {*} req 
 * @param {*} res 
 * @returns
 * Apabila sesi tidak ditemukan maka return (false),
 * tapi bila ditemukan return sessionID dari akun user.
 */
const checkSession = async (req, res) => {
    
    var state;
    // Session ditemukan
    if (req.session.sessionID){
        state = req.session.sessionID; 
    }
    // Session Kosong
    else{
        state = false;
    }
    return state;
}


// SEDAN MENCOBA API READ DATA DARI FIREBASE DAN ERROR
const createAccount = async (res) => {
    const data = await database.readDataOn('/user/ipung443833/logout');
    res.json(data);
};


module.exports = { loginWithEmail, checkSession, createAccount }