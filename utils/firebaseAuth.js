// THIS FOR BASE OF firebaseMod.js (Don't change!)
const base = require('./firebaseMod');
const firebaseAuth = base.firebaseAuth;

// FIREBASE AUTH BACKEND GET AUTH
const auth = firebaseAuth.getAuth();


// Function to create new account
const createAccount = async (mail, pass) => 
{
    await firebaseAuth.createUserWithEmailAndPassword(auth, mail, pass)
    .then((user_credential) => 
    {   return user_credential.user;    })
    .catch((err) => 
    {
        console.log(err.code);
        return false;
    });
}

// Function for login account. 
// Directly return account object, and return false if error.
const loginEmail = async (mail, pass) => 
{
    const obj = await firebaseAuth.signInWithEmailAndPassword(auth, mail, pass)
    .then((snapshot) => 
    {   return snapshot;    })
    .catch((err) => 
    {   return false;   });

    return obj;
}



module.exports = { createAccount, loginEmail }