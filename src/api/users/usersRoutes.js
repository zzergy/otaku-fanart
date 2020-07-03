const express = require("express");
const router = express.Router();
const bcrypt = require('bcrypt');

//fs = File System
const fs = require('fs');

router.post('/register', (request, response) => {
    const userInformation = request.body;

    if (!userInformation.username || userInformation.username === '' || userInformation.username.length < 5  || /[^0-9A-Za-z]/.test(userInformation.username)) {
        response.status(400).send({
            error: 'Invalid username'
        });
        return;
    }

    let registeredUsers = fs.readFileSync(__dirname + '/registeredUsers.json');
    registeredUsers = JSON.parse(registeredUsers);

    const isUsernameAvailable = registeredUsers.every((registeredUser) => {
        return registeredUser.username !== userInformation.username;
    });

    if (!isUsernameAvailable) {
        response.status(400).send({
            error: 'Username already taken'
        });
        return;
    }

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

    userInformation.password = bcrypt.hashSync(userInformation.password, 10);
    registeredUsers.push(userInformation);
    registeredUsers = Buffer.from(JSON.stringify(registeredUsers, null, 4));
    fs.writeFileSync(__dirname + '/registeredUsers.json', registeredUsers);

    response.send({
        message: 'Registration successful'
    });
});

module.exports = router;