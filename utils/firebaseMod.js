// Credentials Certificate
var creden = require('./id-learn-b98b2-firebase-adminsdk-cirkz-cecf9ca01f.json');

// Base Firebase Init
const { initializeApp } = require('firebase/app');
// Firebase node
var firebaseAuth = require('firebase/auth');
var firebaseDB = require('firebase/database');
var firebaseAdmin = require('firebase-admin/app');

// Configuration for firebase
var firebaseConfig = {
    apiKey: "AIzaSyCiIqlZvF9TYbw9d0g69jDyQZIc0L2klUw",
    authDomain: "id-learn-b98b2.firebaseapp.com",
    projectId: "id-learn-b98b2",
    storageBucket: "id-learn-b98b2.appspot.com",
    messagingSenderId: "213823483040",
    appId: "1:213823483040:web:aa66efe322178ad2102dc5",
    measurementId: "G-KVQS745FCH",
    databaseURL: "https://id-learn-b98b2-default-rtdb.asia-southeast1.firebasedatabase.app/",
    credential: firebaseAdmin.cert(creden)
  };

const fbInit = initializeApp(firebaseConfig);

module.exports = { firebaseAuth, firebaseDB, fbInit }