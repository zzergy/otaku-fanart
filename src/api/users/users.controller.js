const hashPassword = require('../utils').hashPassword;
const UserModel = require("./users.model");
const passport = require('passport');

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
        userData.password = hashPassword(userData.password);

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
    },
    login: function (request, response) {
        passport.authenticate('local', function (error, user) {
            if (!user) {
                response.status(400).send({
                    login: false,
                    error: `Can't login`
                });
                return;
            }
            user = user.toObject();

            //deletes the password so that it doesn't go to the frontend
            delete user.password;

            request.login(user, () => {
                response.status(200).send({
                    login: true,
                    user
                });
            });

        })(request, response);
    },
    auth: function (request, response) {
        return response.status(200).send({user: request.user});
    },
    logout: function (request, response) {
        request.session.destroy();
        request.logout();
        response.clearCookie('connect.sid');
        return response.status(200).send({});
    },
    editUserInfo: function (request, response) {
        const editedUserData = request.body;

        //---------- MOTTO VALIDATIONS ----------
        if (editedUserData.motto.length > 24) {
            response.status(400).send({
                error: 'Motto must be under 24 symbols'
            });
            return;
        }

        request.user.motto = editedUserData.motto;
        request.user.bio = editedUserData.bio;
        request.user.save(
            //this function will be called only if the new User data is saved successfully
            (error, updatedUser) => {
                if(error) {
                    response.status(400).send({
                        error: `нз оправяй сe => ${error}`
                    });
                    return;
                }

                response.status(200).send({
                    // updatedUser: request.user,
                    updatedUser: updatedUser.toObject(),
                });
            }
        );

    }
};

module.exports = userController;