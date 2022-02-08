const base = require('./firebaseMod');
const firebaseDB = base.firebaseDB;
var db = firebaseDB.getDatabase(base.fbInit);
 
/**
 * Function untuk menulis database.
 * (tree) sebagai alamat database - string format.
 * (context) sebagai data yang dimasukan, bisa berupa json format.
 * @param {\} tree 
 * @param {*} context 
 * @returns Tanpa return 
*/
const writeData = async (tree, context) => {
    var ref = await firebaseDB.ref(db, tree);
    await firebaseDB.set(ref, context);
}


/**
 * Function untuk membaca database.
 * (tree) sebagai alamat database yang akan dibaca.
 * @param {\} tree 
 * @param {*} context 
 * @returns JSON format.
*/
const readData = async (tree) => {
    //Error saat ambil data
}



module.exports = { writeData, readData }