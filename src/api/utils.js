const bcrypt = require("bcrypt");

function hashPassword (password) {
    //encrypting the password
    return (bcrypt.hashSync(password, 10));
}


//export as object
module.exports = {hashPassword};