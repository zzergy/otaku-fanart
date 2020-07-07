const bcrypt = require("bcrypt");
const UserModel = require("./users.model");

const userController = {
    register: function (request, response) {
        //data
        const userData = request.body;

        //---------- USERNAME VALIDATIONS ----------
        if (!userData.username || userData.username === '' || userData.username.length < 5 || /[^0-9A-Za-z]/.test(userData.username)) {
            response.status(400).send({
                error: 'Invalid username'
            });
            return;
        }

        //---------- PASSWORD VALIDATIONS ----------
        if (!userData.password || userData.password.length < 6) {
            response.status(400).send({
                error: 'Password must be at least 6 characters long'
            });
            return;
        }

        if (/[^0-9A-Za-z]/.test(userData.password)) {
            response.status(400).send({
                error: "Password must contain only numbers and letters"
            });
            return;
        }

        //encrypting the password
        userData.password = bcrypt.hashSync(userData.password, 10);

        //Create User
        UserModel.create(userData, (error, user) => {
            if (error) {
                response.status(400).send({
                    error: "Registration unsuccessful"
                });
                return;
            }

            //if everything is successful
            response.send({
                message: 'Registration successful'
            });
        });
    }
};

module.exports = userController;