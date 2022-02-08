const db = require('../utils/firebaseDB');

const writeUserLogin = async (id) => {
    var datee = new Date();
    await db.writeData('/user/'+id+'/logout', {
        date: datee.getDate(),
        time: datee.getHours()
    });
};

//  Belum di selidiki eror saat ambil data
const readDataOn = async (tree) => {
    return await db.readData(tree);
};


module.exports = {
    writeUserLogin,
    readDataOn
}