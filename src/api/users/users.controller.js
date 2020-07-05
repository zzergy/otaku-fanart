const bcrypt = require("bcrypt");
const UserModel = require("./users.model");

const userController = {
    register: function (request, response) {
        //data
        const userInformation = request.body;

        //---------- USERNAME VALIDATIONS ----------
        if (!userInformation.username || userInformation.username === '' || userInformation.username.length < 5 || /[^0-9A-Za-z]/.test(userInformation.username)) {
            response.status(400).send({
                error: 'Invalid username'
            });
            return;
        }

        //---------- PASSWORD VALIDATIONS ----------
        if (!userInformation.password || userInformation.password.length < 6) {
            response.status(400).send({
                error: 'Password must be at least 6 characters long'
            });
            return;
        }

        if (/[^0-9A-Za-z]/.test(userInformation.password)) {
            response.status(400).send({
                error: "Password must contain only numbers and letters"
            });
            return;
        }

        //encrypting the password
        userInformation.password = bcrypt.hashSync(userInformation.password, 10);

        //Create User
        UserModel.create({username: userInformation.username, password: userInformation.password}, (error, user) => {
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