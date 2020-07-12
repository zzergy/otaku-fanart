const mongoose = require('mongoose');

const PostsSchema = mongoose.Schema({
    imageUrl: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    authorName: {
        type: String
    },
    keywords: [
        {
            keyword: String
        }
    ],
    comments: [
        {
            imageUrl: String,
            username: String,
            comment: String,
        }
    ],
    likeCount: {
        type: Number,
        default: 0
    }
});

const postsModel = mongoose.model("posts", PostsSchema);
module.exports = postsModel;