const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        minLength: 4,
        unique: [true, "Username already taken"]
    },
    imageUrl: {
      type: String,
    },
    //hashed password
    password: {
        type: String,
        required: true
    },
    motto: {
        type: String
    },
    bio: {
        type: String
    },
    posts: [
        {
            postId: String
        }
    ],
    likedPosts: [
        {
            postId: String
        }
    ]
});

const userModel = mongoose.model("users", UserSchema);
module.exports = userModel;