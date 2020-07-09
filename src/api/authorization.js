const usersModel = require('./users/users.model');
const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');

passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser(function(id, done) {
    usersModel.findById(id, function(err, user) {
        done(err, user);
    });
});

passport.use(new localStrategy(
    function (username, password, done) {

        //searches in db for users that fit the requirements
        usersModel.findOne(
            {
                username: username,
            },
            function (error, user) {
                //returns to the user an error and he won't be able to login
                if (error) {
                    return done(error);
                }

             if(!bcrypt.compareSync(password, user.password)) {
                 return done({error: 'Wrong password'});
             }

                //no error and returns the user => able to login
                return done(null, user);
            }
        );
    }
));
